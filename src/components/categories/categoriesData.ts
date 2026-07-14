import {
  Code2,
  Smartphone,
  Palette,
  Brain,
  Database,
  ShieldCheck,
  Megaphone,
  Briefcase,
} from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  courses: number;
  color: string;
  icon: React.ElementType;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Next.js and Node.js.",
    courses: 120,
    color: "bg-cyan-500",
    icon: Code2,
  },
  {
    id: 2,
    title: "App Development",
    description: "Build Android & iOS apps using Flutter and React Native.",
    courses: 75,
    color: "bg-blue-500",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "UI / UX Design",
    description: "Master Figma, Adobe XD and modern user experience design.",
    courses: 58,
    color: "bg-pink-500",
    icon: Palette,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description: "Explore AI, Machine Learning and Deep Learning projects.",
    courses: 40,
    color: "bg-violet-500",
    icon: Brain,
  },
  {
    id: 5,
    title: "Data Science",
    description: "Analyze data using Python, SQL, Pandas and Power BI.",
    courses: 65,
    color: "bg-emerald-500",
    icon: Database,
  },
  {
    id: 6,
    title: "Cyber Security",
    description: "Learn ethical hacking, penetration testing and network security.",
    courses: 48,
    color: "bg-red-500",
    icon: ShieldCheck,
  },
  {
    id: 7,
    title: "Digital Marketing",
    description: "SEO, Social Media Marketing and Google Ads mastery.",
    courses: 52,
    color: "bg-orange-500",
    icon: Megaphone,
  },
  {
    id: 8,
    title: "Business & Finance",
    description: "Develop business strategies and financial management skills.",
    courses: 36,
    color: "bg-indigo-500",
    icon: Briefcase,
  },
];