import Link from "next/link";
import HighlightedHeading from "./HighlightedHeading";
import { ChevronDown } from "lucide-react";

const Blogs = () => {
  return (
    <div className="mt-5 border-t pt-5">
      <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
      <HighlightedHeading className="my-4">
        What I&apos;m writing lately
      </HighlightedHeading>
      <div className="grid grid-cols-1 gap-4">
        <div className="relative col-span-1 flex h-10 min-h-20 cursor-pointer flex-col justify-between gap-2 rounded-md border p-3 shadow-sm transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md md:flex-row md:items-center">
          <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="absolute -bottom-px left-10 z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <p className="font-bold tracking-tight">
            Essential Sections Every Developer Portfolio Should Have
          </p>
          <p className="text-sm text-gray-500">1291 views</p>
        </div>
        <div className="relative col-span-1 flex h-10 min-h-20 cursor-pointer flex-col justify-between gap-2 rounded-md border p-3 shadow-sm transition-all duration-200 ease-in-out hover:scale-[1.01] hover:shadow-md md:flex-row md:items-center">
          <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="absolute -bottom-px left-10 z-30 h-px w-[50%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <p className="font-bold tracking-tight">
            Ace the Javascript Interview
          </p>
          <p className="text-sm text-gray-500">720 views</p>
        </div>
      </div>

      <Link href={"/projects"} className="mt-5 flex justify-center text-xs">
        Read More <ChevronDown size={16} />
      </Link>
    </div>
  );
};

export default Blogs;
