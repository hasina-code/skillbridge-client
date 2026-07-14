import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";

export interface Statistic {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: any;
}

export const statistics: Statistic[] = [
  {
    id: 1,
    value: "15K+",
    title: "Students",
    description:
      "Active learners enrolled in our online courses worldwide.",
    icon: GraduationCap,
  },
  {
    id: 2,
    value: "250+",
    title: "Courses",
    description:
      "Industry-focused courses designed by experienced instructors.",
    icon: BookOpen,
  },
  {
    id: 3,
    value: "80+",
    title: "Expert Mentors",
    description:
      "Professional mentors providing live guidance and career support.",
    icon: Users,
  },
  {
    id: 4,
    value: "98%",
    title: "Success Rate",
    description:
      "Students successfully complete courses and achieve their goals.",
    icon: Trophy,
  },
];