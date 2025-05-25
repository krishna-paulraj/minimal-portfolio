import HighlightedHeading from "./HighlightedHeading";

const Contact = () => {
  return (
    <div className="mt-5 border-t pt-5">
      <HighlightedHeading className="my-4">Get in touch</HighlightedHeading>
      <p className="max-w-md text-xs text-gray-500">
        I&apos;m currently looking for new opportunities. Whether you have a
        question or want to say hi, hit that button.
      </p>
      <div className="relative mt-4 max-w-md">
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-lg bg-white px-4 py-3 pr-[120px] text-xs text-neutral-700 shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-300"
        />
        <a
          href="mailto:krishnapaulraj2004@gmail.com"
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-xs text-neutral-700 shadow-sm transition-colors hover:bg-neutral-200"
        >
          Send Enquiry
        </a>
      </div>
    </div>
  );
};

export default Contact;
