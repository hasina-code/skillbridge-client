import {
  GraduationCap,
  Award,
  Briefcase,
  Laptop,
  Users,
  Infinity,
} from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Expert Mentors",
    description:
      "Learn directly from experienced industry professionals through live classes and one-on-one mentorship.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Professional Certificate",
    description:
      "Receive an industry-recognized certificate after successfully completing every course.",
    icon: Award,
  },
  {
    id: 3,
    title: "Career & Job Support",
    description:
      "Get career guidance, resume reviews, interview preparation, and job placement assistance.",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Interactive Live Classes",
    description:
      "Join engaging live sessions with real-world projects, quizzes, and instructor feedback.",
    icon: Laptop,
  },
  {
    id: 5,
    title: "Learning Community",
    description:
      "Connect with thousands of learners, mentors, and professionals in our active community.",
    icon: Users,
  },
  {
    id: 6,
    title: "Lifetime Access",
    description:
      "Enjoy unlimited lifetime access to course materials, updates, and recorded lessons.",
    icon: Infinity,
  },
];