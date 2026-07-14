export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    rating: 5,
    review:
      "SkillBridge transformed my learning journey. The courses were practical, well-structured, and helped me land my first frontend developer job.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rating: 5,
    review:
      "The instructors explained every concept clearly. I especially loved the hands-on projects that strengthened my design portfolio.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    rating: 5,
    review:
      "The data analytics learning path was excellent. I gained practical experience and successfully switched my career into tech.",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    rating: 5,
    review:
      "SkillBridge offers one of the best learning experiences I've had. The mentorship sessions were incredibly valuable.",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Mobile App Developer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    rating: 5,
    review:
      "I completed the Flutter development track and quickly built my own apps. The platform exceeded my expectations.",
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&q=80",
    rating: 5,
    review:
      "Amazing platform with modern technologies, real-world projects, and an active learning community. Highly recommended.",
  },
];