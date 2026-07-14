import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// =======================
// GET Single Course
// =======================

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const client = await clientPromise;
    const db = client.db("SkillBridge");

    const course = await db.collection("courses").findOne({
      _id: new ObjectId(id),
    });

    if (!course) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch course" },
      { status: 500 }
    );
  }
}

// =======================
// UPDATE Course
// =======================

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("SkillBridge");

    const result = await db.collection("courses").updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          ...body,
          price: Number(body.price),
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Course updated successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update course" },
      { status: 500 }
    );
  }
}

// =======================
// DELETE Course
// =======================

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const client = await clientPromise;
    const db = client.db("SkillBridge");

    const result = await db.collection("courses").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to delete course" },
      { status: 500 }
    );
  }
}