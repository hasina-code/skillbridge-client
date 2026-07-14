export interface Course {
  _id?: string;

  title: string;

  shortDescription: string;

  description: string;

  category: string;

  level: "Beginner" | "Intermediate" | "Advanced";

  duration: string;

  price: number;

  thumbnail: string;

  instructorName: string;

  instructorEmail: string;

  createdAt?: Date;

  updatedAt?: Date;
}