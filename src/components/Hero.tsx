import { Code, CodeXml, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col md:grid-cols-1 mt-10 relative">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-none tracking-tighter">
          Suresh Krishna P.
        </h1>
      </div>
      <p className="text-md my-2 pb-2 text-slate-600 leading-tight">
        A passionate web developer crafting sleek
        <br />
        and efficient digital
        experiences.
      </p>

      <div className="pt-5 border-t border-gray-200 text-md text-slate-600 font-medium flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <CodeXml className="size-4 text-black" />
          <div className="flex">
            <p>Software Engineer</p>
            <a href="https://blocsys.com" target="_blank" rel="noopener noreferrer" className="text-black underline underline-offset-4 ml-2">@Blocsys</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="size-4 text-black" /> Pune City, Maharashtra, India
        </div>
        <a href="tel:+917276061175" className="flex items-center gap-3 hover:underline underline-offset-4">
          <PhoneCallIcon className="size-4 text-black" /> +91 7276061175
        </a>
        <a href="mailto:krishnapaulraj2004@gmail.com" className="flex items-center gap-3 hover:underline underline-offset-4">
          <MailIcon className="size-4 text-black" /> krishnapaulraj2004@gmail.com
        </a>
      </div>
      <div className="z-[-1] absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Hero;
