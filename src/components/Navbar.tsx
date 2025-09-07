"use client";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

const Navbar = () => {
  const navItems = [

    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  const [howered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Disable scroll animations on mobile
    if (isMobile) return;

    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.nav
      animate={isMobile ? {} : {
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled
          ? "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          : "none",
        width: scrolled ? "40%" : "100%",
        y: scrolled ? 20 : 0,
      }}
      transition={isMobile ? {} : {
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "300px",
      }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex h-16 max-w-3xl items-center justify-between rounded-full bg-white/30 p-2 backdrop-blur"
    >
      <Link href={"/"}>
        <Image
          src={"/profile.jpeg"}
          width={"50"}
          height={"50"}
          alt="Profile Photo"
          className="rounded-full"
        />
      </Link>
      <div className="flex items-center">
        {navItems.map((item, idx) => (
          item.href.startsWith('#') ? (
            <button
              className="relative px-2 py-1 text-sm"
              onClick={scrollToContact}
              key={idx}
              onMouseEnter={() => !isMobile && setHovered(idx)}
              onMouseLeave={() => !isMobile && setHovered(null)}
            >
              {howered === idx && (
                <motion.span
                  layoutId="howered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </button>
          ) : (
            <Link
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
              onMouseEnter={() => !isMobile && setHovered(idx)}
              onMouseLeave={() => !isMobile && setHovered(null)}
            >
              {howered === idx && (
                <motion.span
                  layoutId="howered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          )
        ))}
        <Link
          target="_blank"
          className="group relative ml-2 inline-block cursor-pointer rounded-full bg-slate-900 p-px text-xs font-semibold leading-6 text-white no-underline shadow-sm shadow-zinc-900"
          href="https://drive.google.com/file/d/1dwAWPkNhnmnSIxYgTEuyoLpMwFup_oOQ/view?usp=sharing"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative z-10 flex items-center rounded-full bg-transparent px-3 py-1.5 ring-1 ring-white/10">
            <span>Read Resume</span>
            <ChevronRightIcon size={15} />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
