import Link from "next/link";

const BlogsPage = () => {
    const blogs = [
        {
            title: "Essential Sections Every Developer Portfolio Should Have",
            description: "Essential Sections Every Developer Portfolio Should Have",
            link: "essential-sections-every-developer-portfolio-should-have",
        },
        {
            title: "Ace the Javascript Interview",
            description: "Ace the Javascript Interview",
            link: "ace-the-javascript-interview",
        },
    ];
    return (
        <div>
            <h1>Blogs</h1>
            {blogs.map((blog) => (
                <div key={blog.link}>
                    <Link href={`/blogs/${blog.link}`}>{blog.title}</Link>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogsPage;