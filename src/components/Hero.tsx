const Hero = () => {
  return (
    <div className="flex flex-col pr-2 leading-none tracking-tighter md:grid-cols-1">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
        <h1 className="text-5xl font-extrabold tracking-tighter">
          Suresh Krishna
        </h1>
        <div className="relative">
          <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-gray-400 shadow-shadow">
            Software Engineer
          </span>
        </div>
      </div>
      <p className="mt-3 text-lg text-gray-400">
        A passionate web developer crafting sleek <br /> and efficient digital
        experiences.
      </p>
    </div>
  );
};

export default Hero;
