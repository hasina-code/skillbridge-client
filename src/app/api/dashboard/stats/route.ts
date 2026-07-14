import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("SkillBridge");

    const coursesCollection = db.collection("courses");
    const usersCollection = db.collection("users");
    const enrollmentsCollection = db.collection("enrollments");

    // Total Courses
    const totalCourses = await coursesCollection.countDocuments();

    // Total Users
    const totalUsers = await usersCollection.countDocuments();

    // Total Enrollments
    const totalEnrollments = await enrollmentsCollection.countDocuments();

    // Revenue
    const enrollments = await enrollmentsCollection.find().toArray();

    const revenue = enrollments.reduce(
      (total, enrollment: any) => total + (Number(enrollment.price) || 0),
      0
    );

    // Completed Courses
    const completedCourses =
      await enrollmentsCollection.countDocuments({
        status: "completed",
      });

    return NextResponse.json({
      totalCourses,
      totalUsers,
      totalEnrollments,
      completedCourses,
      revenue,
    });
  } catch (error) {
    console.error("Dashboard Stats Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard statistics.",
      },
      {
        status: 500,
      }
    );
  }
}