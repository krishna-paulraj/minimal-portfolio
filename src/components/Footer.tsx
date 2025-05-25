import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex justify-between border-t px-1 py-2 text-[11px] text-gray-500">
      <p>Inspired By Manu Arora</p>
      <div className="flex gap-2">
        <TwitterIcon size={15} />
        <LinkedinIcon size={15} />
        <GithubIcon size={15} />
      </div>
    </footer>
  );
};

export default Footer;
