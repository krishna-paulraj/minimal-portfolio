"use client";

import { useEffect, useState } from "react";
import BlogsClient from "./blog-items";
import type { Post } from "@/features/blogs/types/post";

export default function BlogsWrapper() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch posts from an API route
        fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="my-2 mt-5 border-t pt-5">
                <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return <BlogsClient posts={posts} />;
}
