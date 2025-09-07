import { Markdown } from "./markdown";
import { Prose } from "./ui/typography";

const aboutMe = `
Hello, World! I'm Suresh Krishna Paulraj — a Web Developer passionate about building scalable, user-friendly applications with clean and efficient code.

With hands-on experience in Next.js, React, TypeScript, and modern web technologies, I focus on creating intuitive solutions that deliver real value. I enjoy experimenting with new technologies, solving challenging problems, and turning ideas into impactful projects.

I currently work at [Blocsys](https://blocsys.com) as a Software Engineer.

Beyond coding, I constantly push myself to improve my skills and learn new technologies.

Let’s connect and collaborate!
`;

const About = () => {
    return (
        <div className="mt-10 border-t border-gray-200">
            <h1 className="text-3xl font-bold tracking-tight my-5">About</h1>
            <Prose>
                <Markdown>{aboutMe}</Markdown>
            </Prose>
        </div>
    );
};

export default About;