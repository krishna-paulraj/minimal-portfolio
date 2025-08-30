"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import { motion } from "framer-motion";
import WorkExperience from "@/components/WorkExperience";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen">
      <div className="mt-10 text-left">
        <Hero />
        {/* <Socials /> */}
        <SocialLinks />
      </div>
      <Projects />
      <Blogs />
      <WorkExperience />
      <Contact />
    </motion.div>
  );
}
