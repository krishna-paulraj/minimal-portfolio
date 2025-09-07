import dayjs from "dayjs";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";

import {
    findNeighbour,
    getAllPosts,
    getPostBySlug,
} from "@/features/blogs/data/posts";
import type { Post } from "@/features/blogs/types/post";
import { cn } from "@/lib/utils";
import { MDX } from "@/components/mdx";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;
    const post = getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const { title, description, image, createdAt, updatedAt } = post.metadata;

    const postUrl = getPostUrl(post);
    const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            url: postUrl,
            type: "article",
            publishedTime: dayjs(createdAt).toISOString(),
            modifiedTime: dayjs(updatedAt).toISOString(),
            images: {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: title,
            },
        },
        twitter: {
            card: "summary_large_image",
            images: [ogImage],
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const slug = (await params).slug;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }


    const allPosts = getAllPosts();

    return (
        <>

            <div className="flex items-center justify-between p-2 pl-4">
                <Button
                    className="h-7 my-10 gap-2 rounded-lg px-0 text-muted-foreground"
                    variant="link"
                    asChild
                >
                    <Link href="/blogs">
                        <ArrowLeftIcon />
                        Blogs
                    </Link>
                </Button>


            </div>

            <Prose className="px-4">
                <h1 className="screen-line-after mb-6 font-semibold">
                    {post.metadata.title}
                </h1>

                <p className="lead mt-6 mb-6">{post.metadata.description}</p>

                <div>
                    <MDX code={post.content} />
                </div>
            </Prose>

            <div className="screen-line-before h-4 w-full" />
        </>
    );
}

function getPostUrl(post: Post) {
    const isComponent = post.metadata.category === "components";
    return isComponent ? `/components/${post.slug}` : `/blog/${post.slug}`;
}