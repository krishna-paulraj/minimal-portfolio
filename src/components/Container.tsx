"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="relative mx-auto max-w-4xl px-4 md:px-14 pt-16">
      {children}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden md:block absolute -right-px top-0 h-full w-10 border-l border-gray-200 bg-[image:repeating-linear-gradient(315deg,_rgb(209_213_219)_0,_rgb(209_213_219)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="hidden md:block absolute -left-px top-0 h-full w-10 border-r border-gray-200 bg-[image:repeating-linear-gradient(315deg,_rgb(229_231_235)_0,_rgb(229_231_235)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></motion.div>
    </div>
  );
};

export default Container;
