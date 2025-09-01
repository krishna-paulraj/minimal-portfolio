const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    return (
        <div>
            <h1>{slug}</h1>
            <p>Blog</p>
        </div>
    );
};

export default BlogPage;