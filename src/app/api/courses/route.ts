import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("SkillBridge");

    const coursesCollection = db.collection("courses");

    const courses = await coursesCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(courses);
  } catch (error) {
    console.error("GET Courses Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch courses." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      shortDescription,
      description,
      category,
      level,
      duration,
      price,
      thumbnail,
      instructorName,
      instructorEmail,
    } = body;

    if (
      !title ||
      !shortDescription ||
      !description ||
      !category ||
      !level ||
      !duration ||
      !price ||
      !thumbnail
    ) {
      return NextResponse.json(
        { message: "All required fields must be provided." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("SkillBridge");

    const coursesCollection = db.collection("courses");

    const newCourse = {
      title,
      shortDescription,
      description,
      category,
      level,
      duration,
      price: Number(price),
      thumbnail,

      instructorName,
      instructorEmail,

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await coursesCollection.insertOne(newCourse);

    return NextResponse.json(
      {
        success: true,
        message: "Course added successfully.",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Course Error:", error);

    return NextResponse.json(
      { message: "Failed to add course." },
      { status: 500 }
    );
  }
}