import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card";

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
        {
            title: "Ace the Javascript Interview",
            description: "Ace the Javascript Interview",
            link: "ace-the-javascript-interview",
        },
        {
            title: "Ace the Javascript Interview",
            description: "Ace the Javascript Interview",
            link: "ace-the-javascript-interview",
        },
        {
            title: "Ace the Javascript Interview",
            description: "Ace the Javascript Interview",
            link: "ace-the-javascript-interview",
        },
        {
            title: "Ace the Javascript Interview",
            description: "Ace the Javascript Interview",
            link: "ace-the-javascript-interview",
        },
    ];
    return (
        <div className="mt-10 text-left">
            <h1 className="text-5xl font-extrabold tracking-tighter">
                Blogs
            </h1>
            <p className="mt-3 text-md text-slate-500 leading-none">
                A collection of articles on development, design, and ideas.
                <br />
                I share my learnings, ideas, and experiences here.
            </p>
            <div className="my-5 border" />
            <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {blogs.map((blog, index) => (
                    <MinimalCard className="cursor-pointer group" key={index}>
                        <MinimalCardImage
                            className="h-[320px]"
                            src={"https://assets.chanhdai.com/images/blog/250804-manu-arora-reviewed-my-portfolio-website.webp"}
                            alt={blog.title}
                        />
                        <MinimalCardTitle className="group-hover:underline-offset-2 group-hover:underline">{blog.title}</MinimalCardTitle>
                        <MinimalCardDescription>
                            {blog.description}
                        </MinimalCardDescription>
                    </MinimalCard>
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;