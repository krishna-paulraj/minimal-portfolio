"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const socials = [
  {
    title: "lg",
    href: "zyx",
    platform: "Instagram",
    username: "sureshkrishna_07",
  },
  {
    title: "ln",
    href: "https://www.linkedin.com/in/suresh-krishna-paulraj/",
    platform: "Linkdin",
    username: "suresh_krishna_paulraj",
  },
  {
    title: "gb",
    href: "https://github.com/krishna-paulraj",
    platform: "Github",
    username: "krishna-paulraj",
  },
];

const Socials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div className="mt-5 flex">
      {socials.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative z-0 -mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-base shadow-md hover:z-20"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{
            scale: 1,
            borderWidth: 1,
          }}
          whileHover={{
            scale: 1.1,
            borderWidth: 2,
          }}
          transition={{
            ease: "linear",
          }}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="relative z-30 text-base font-bold text-white">
                  @{item.username}
                </div>
                <div className="text-xs text-white">{item.platform}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <Link target="_blank" href={item.href}>
            {item.title}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Socials;
