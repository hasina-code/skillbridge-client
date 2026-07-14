import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import FeaturedCourses from "@/components/featuredCourses/FeaturedCourses";
import WhyChooseSkillBridge from "@/components/whyChoose/WhyChooseSkillBridge";
import LearningStatistics from "@/components/statistics/LearningStatistics";
import Testimonials from "@/components/testimonials/Testimonials";
import LatestBlogs from "@/components/blogs/LatestBlogs";
import Newsletter from "@/components/newsletter/Newsletter";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
export default function Home() {
  return (
    <>
      <Hero />
   <FeaturedCourses />
      <Categories />
      
      <WhyChooseSkillBridge />

      <LearningStatistics />
      
      <Testimonials />
      <LatestBlogs />
      <Newsletter />
      <FAQ />
      <CTA/>
      
    </>
  );
}