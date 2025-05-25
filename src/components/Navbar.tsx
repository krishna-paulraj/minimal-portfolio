"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "about",
    },
    {
      title: "Work",
      href: "work",
    },
    {
      title: "Projects",
      href: "projects",
    },
    {
      title: "Contact",
      href: "contact",
    },
  ];

  const [howered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.nav
      animate={{
        boxShadow: scrolled
          ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          : "none",
        width: scrolled ? "60%" : "100%",
        y: scrolled ? 15 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex h-16 max-w-3xl items-center justify-between rounded-full bg-white/30 p-2 backdrop-blur"
    >
      <Image
        src={"/profile.jpeg"}
        width={"50"}
        height={"50"}
        alt="Profile Photo"
        className="rounded-full"
      />
      <div className="flex">
        {navItems.map((item, idx) => (
          <Link
            className="relative px-2 py-1 text-xs"
            href={item.href}
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {howered === idx && (
              <motion.span
                layoutId="howered-span"
                className="absolute inset-0 h-full w-full rounded-md bg-neutral-100"
              ></motion.span>
            )}
            <span className="relative z-10">{item.title}</span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
