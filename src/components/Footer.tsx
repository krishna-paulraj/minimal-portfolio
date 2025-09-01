import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between border-t px-1 py-2 text-xs text-gray-500">
      <p>Inspired By Manu Arora & Chanhdai</p>
      <div className="flex gap-2">
        <h1>Find me on</h1>
        <Link href={"https://leetcode.com/u/krishnapaulraj/"}>
          <Image
            src={"/icons/leetcode.svg"}
            height={15}
            width={15}
            alt="leetcode logo"
          />
        </Link>
        <Link href={"https://x.com/devaskrish"}>
          <TwitterIcon size={15} />
        </Link>
        <Link href={"https://www.linkedin.com/in/suresh-krishna-paulraj"}>
          <LinkedinIcon size={15} />
        </Link>
        <Link href={"https://github.com/krishna-paulraj"}>
          <GithubIcon size={15} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
