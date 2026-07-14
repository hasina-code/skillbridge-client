export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How do I enroll in a course?",
    answer:
      "Simply create a SkillBridge account, browse our courses, choose the one you want, and complete the enrollment process. You'll get instant access after successful registration.",
  },
  {
    id: 2,
    question: "Do I receive a certificate after completing a course?",
    answer:
      "Yes. Every eligible course provides a verified certificate that you can download and share on your resume, LinkedIn profile, or professional portfolio.",
  },
  {
    id: 3,
    question: "Are the courses suitable for beginners?",
    answer:
      "Absolutely! We offer beginner, intermediate, and advanced courses. Each course clearly indicates its difficulty level before you enroll.",
  },
  {
    id: 4,
    question: "Can I learn at my own pace?",
    answer:
      "Yes. Most SkillBridge courses are self-paced, allowing you to study whenever and wherever it is convenient for you.",
  },
  {
    id: 5,
    question: "Do I get lifetime access to purchased courses?",
    answer:
      "Yes. Once you purchase a course, you can access its learning materials anytime unless otherwise stated by the instructor.",
  },
  {
    id: 6,
    question: "Does SkillBridge provide career support?",
    answer:
      "Yes. We provide career guidance, portfolio reviews, interview preparation, and job readiness resources to help learners achieve their goals.",
  },
  {
    id: 7,
    question: "How can I contact the support team?",
    answer:
      "You can contact our support team through the Contact page or email us at support@skillbridge.com. We typically respond within 24 hours.",
  },
  {
    id: 8,
    question: "Which payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, mobile banking, digital wallets, and other secure online payment methods depending on your region.",
  },
];