import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card";
import { getAllPosts } from "@/features/blogs/data/posts";
import dayjs from "dayjs";
import Link from "next/link";

const BlogsPage = () => {
    const allPosts = getAllPosts();

    return (
        <div className="mt-10 text-left min-h-screen">
            <h1 className="text-5xl font-extrabold tracking-tighter">
                Blogs
            </h1>
            <p className="mt-3 text-md text-slate-500 leading-none">
                A collection of articles on development, design, and ideas.{" "}
            </p>
            <p className="mt-2 md:mt-0 text-md text-slate-500 leading-none">
                I share my learnings, ideas, and experiences here.
            </p>
            <div className="my-5 border" />
            <div
                className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
                {allPosts.map((blog, index) => (
                    <Link href={`/blogs/${blog.slug}`} key={index}>
                        <MinimalCard className="cursor-pointer group h-full" key={index}>
                            <MinimalCardImage
                                className="h-[320px]"
                                src={blog.metadata.image ?? ""}
                                alt={blog.metadata.title}
                            />
                            <MinimalCardTitle className="group-hover:underline-offset-2 group-hover:underline">{blog.metadata.title}</MinimalCardTitle>
                            <MinimalCardDescription className="mt-2">
                                {dayjs(blog.metadata.createdAt).format("DD MMM YYYY")}
                            </MinimalCardDescription>
                        </MinimalCard>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;