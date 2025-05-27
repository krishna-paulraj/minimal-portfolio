import { ChevronDown } from "lucide-react";
import Link from "next/link";
import HighlightedHeading from "./HighlightedHeading";

const Projects = () => {
  const projects = [
    {
      name: "Moonbeam",
      description:
        "Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant.",
      type: "Front-end",
      tech: ["GPT-3", "Next.js", "React", "TailwindCSS", "Chrome Extension"],
    },
    {
      name: "Aceternity",
      description:
        "Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love.",
      type: "Full-Stack",
      tech: ["Next.js", "React", "TailwindCSS"],
    },
    {
      name: "Algochurn",
      description:
        "Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment.",
      type: "Full-Stack",
      tech: ["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"],
    },
    {
      name: "Tailwind Master Kit",
      description:
        "Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project.",
      type: "Freemium",
      tech: ["Tailwind", "Next.js"],
    },
    {
      name: "PlaceholderTech",
      description:
        "We build modern, blazing-fast web applications which helps your business grow and increase sales.",
      type: "Web Dev Agency",
      tech: ["Products", "Freemium"],
    },
    {
      name: "Feedmeback",
      description:
        "The easiest way to add comments or reviews to your static site. Built as part of React 2025.",
      type: "Front-end",
      tech: ["Next.js", "Stripe", "TailwindCSS"],
    },
  ];

  return (
    <div className="mt-5 border-t pt-5">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <HighlightedHeading className="my-4">
        I love building things
      </HighlightedHeading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="relative min-h-60 transform cursor-pointer rounded-md border p-3 shadow-sm transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute -bottom-px left-10 z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <p className="font-bold tracking-tighter">{item.name}</p>
            <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            <div className="mt-3 flex flex-wrap">
              {item.tech.map((tech, idx) => (
                <p
                  key={idx}
                  className="mb-1 mr-1 rounded-md bg-gray-50 px-1 text-xs italic leading-5 text-gray-700"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link href={"/projects"} className="mt-5 flex justify-center text-xs">
        See More <ChevronDown size={16} />
      </Link>
    </div>
  );
};

export default Projects;
