import { ContainerTextFlip } from "./ui/container-text-flip";

const Hero = () => {
  return (
    <div className="flex flex-col pr-2 leading-none tracking-tighter md:grid-cols-1">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-5xl font-extrabold tracking-tighter">
          Suresh Krishna P.
        </h1>
        <div>
          <ContainerTextFlip
            words={["Software Engineer", "Designer", "DevOps"]}
          />
        </div>
      </div>
      <p className="mt-3 text-md text-slate-500">
        A passionate web developer crafting sleek <br /> and efficient digital
        experiences.
      </p>
    </div>
  );
};

export default Hero;
