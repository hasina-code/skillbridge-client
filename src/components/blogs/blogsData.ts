export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Become a Full Stack Developer in 2026",
    description:
      "Discover the complete roadmap to becoming a professional full stack developer using modern technologies like React, Next.js, Node.js, Express, MongoDB, and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    category: "Web Development",
    date: "July 8, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Top AI Skills Every Developer Should Learn",
    description:
      "Artificial Intelligence is transforming software development. Learn the most valuable AI skills that employers are looking for in 2026.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    category: "Artificial Intelligence",
    date: "July 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Modern UI/UX Design Principles for Beginners",
    description:
      "Learn the latest UI/UX principles to create beautiful, user-friendly, and accessible web applications from scratch.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
    category: "UI / UX",
    date: "July 2, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Cybersecurity Basics Every Programmer Should Know",
    description:
      "Protect your applications by understanding common security vulnerabilities and industry best practices.",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=900&q=80",
    category: "Cyber Security",
    date: "June 28, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Build Real Projects to Boost Your Portfolio",
    description:
      "A strong portfolio is the fastest way to impress recruiters. Learn how to create impactful projects that stand out.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    category: "Career",
    date: "June 25, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Master TypeScript for Modern Web Development",
    description:
      "TypeScript improves code quality and developer productivity. Explore the essential concepts every frontend and backend developer should know.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
    category: "TypeScript",
    date: "June 20, 2026",
    readTime: "6 min read",
  },
];