"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import BlogsWrapper from "@/components/blogs/BlogsWrapper";
import { motion } from "framer-motion";
import WorkExperienceComponent from "@/components/work-experience";
import EducationComponent from "@/components/education";
import { SocialLinks } from "@/components/social-links";
import About from "@/components/About";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen">
      <Hero />
      {/* <Socials /> */}
      <SocialLinks />
      {/* <Projects /> */}
      <About />
      <BlogsWrapper />
      <WorkExperienceComponent />
      <EducationComponent />
      <Contact />
    </motion.div>
  );
}
