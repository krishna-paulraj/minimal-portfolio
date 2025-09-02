import HighlightedHeading from "./HighlightedHeading";
import { ContainerTextFlip } from "./ui/container-text-flip";

const Hero = () => {
  return (
    <div className="flex flex-col pr-2  md:grid-cols-1">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-5xl font-extrabold leading-none tracking-tighter">
          Suresh Krishna P.
        </h1>
        {/* <div>
          <ContainerTextFlip
            words={["Software Engineer", "Designer", "DevOps"]}
          />
        </div> */}
      </div>
      <HighlightedHeading className="mt-2 mb-4">Software Engineer</HighlightedHeading>
      <p className="text-md text-slate-500 leading-none">
        A passionate web developer crafting sleek
        <br />
        and efficient digital
        experiences.
      </p>
      <div className="my-2 border" />
    </div>
  );
};

export default Hero;
