import BlogsClient from "@/components/blogs/blog-items";
import { getAllPosts } from "@/features/blogs/data/posts";

export default function Blogs() {
  const posts = getAllPosts();
  return <BlogsClient posts={posts} />;
}
