"use client";

import Link from "next/link";
import HighlightedHeading from "../HighlightedHeading";
import { ChevronDown } from "lucide-react";
import type { Post } from "@/features/blogs/types/post";

interface BlogsProps {
    posts: Post[];
}

const BlogsClient = ({ posts }: BlogsProps) => {
    return (
        <div className="my-2 mt-5 border-t pt-5">
            <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
            <HighlightedHeading className="my-4">
                What I&apos;m writing lately
            </HighlightedHeading>

            <div className="grid grid-cols-1 gap-4">
                {posts.slice(0, 2).map((post, index) => (
                    <Link
                        href={`/blogs/${post.slug}`}
                        key={index}
                        className="group/blog relative col-span-1 flex min-h-20 cursor-pointer flex-col justify-between gap-2 rounded-md border p-3 transition hover:bg-muted md:flex-row md:items-center"
                    >
                        <p className="font-bold tracking-tight underline-offset-4 group-hover/blog:underline">
                            {post.metadata.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {new Date(post.metadata.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) ?? "—"}
                        </p>
                    </Link>
                ))}
            </div>

            <Link href="/blogs" className="mt-5 flex justify-center text-xs">
                Read More <ChevronDown size={16} />
            </Link>
        </div>
    );
};

export default BlogsClient;
