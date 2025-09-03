import { Code, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import { Markdown } from "./markdown";
import { Prose } from "./ui/typography";

const aboutMe = `
Hello, World! I'm Suresh Krishna Paulraj — a Web Developer passionate about building scalable, user-friendly applications with clean and efficient code.

With hands-on experience in Next.js, React, TypeScript, and modern web technologies, I focus on creating intuitive solutions that deliver real value. I enjoy experimenting with new technologies, solving challenging problems, and turning ideas into impactful projects.

I currently work at [Blocsys](https://blocsys.com) as a Software Engineer.

Beyond coding, I constantly push myself to improve my skills and learn new technologies.

Let’s connect and collaborate!
`;


const Hero = () => {
  return (
    <div className="flex flex-col md:grid-cols-1">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-5xl font-extrabold leading-none tracking-tighter">
          Suresh Krishna P.
        </h1>
      </div>
      <p className="text-md my-2 pb-2 text-slate-600 leading-tight">
        A passionate web developer crafting sleek
        <br />
        and efficient digital
        experiences.
      </p>

      <div className="py-5 border-t border-gray-200 text-md text-slate-600 font-medium flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Code className="size-4" />
          <div className="flex">
            <p>Software Engineer</p>
            <a href="https://blocsys.com" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4 ml-2">@Blocsys</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="size-4" /> Pune City, Maharashtra, India
        </div>
        <div className="flex items-center gap-3">
          <PhoneCallIcon className="size-4" /> +91 7276061175
        </div>
        <div className="flex items-center gap-3">
          <MailIcon className="size-4" /> krishnapaulraj2004@gmail.com
        </div>
      </div>

      <div className="my-2 border-t border-gray-200">
        <h1 className="text-3xl font-bold tracking-tight my-5">About</h1>
        <Prose>
          <Markdown>{aboutMe}</Markdown>
        </Prose>
      </div>
    </div>
  );
};

export default Hero;
