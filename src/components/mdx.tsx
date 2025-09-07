import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const components: MDXRemoteProps["components"] = {
    h1: (props: React.ComponentProps<"h1">) => (
        <h1 className="text-3xl font-bold tracking-tight mb-4" {...props} />
    ),
    h2: (props: React.ComponentProps<"h2">) => (
        <h2 className="text-2xl font-semibold tracking-tight mb-3" {...props} />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
        <h3 className="text-xl font-semibold tracking-tight mb-2" {...props} />
    ),
    h4: (props: React.ComponentProps<"h4">) => (
        <h4 className="text-lg font-semibold tracking-tight mb-2" {...props} />
    ),
    h5: (props: React.ComponentProps<"h5">) => (
        <h5 className="text-base font-semibold tracking-tight mb-2" {...props} />
    ),
    h6: (props: React.ComponentProps<"h6">) => (
        <h6 className="text-sm font-semibold tracking-tight mb-2" {...props} />
    ),
    p: (props: React.ComponentProps<"p">) => (
        <p className="mb-4 leading-7" {...props} />
    ),
    a: (props: React.ComponentProps<"a">) => (
        <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
    ),
    ul: (props: React.ComponentProps<"ul">) => (
        <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
    ),
    ol: (props: React.ComponentProps<"ol">) => (
        <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
    ),
    li: (props: React.ComponentProps<"li">) => (
        <li className="leading-7" {...props} />
    ),
    blockquote: (props: React.ComponentProps<"blockquote">) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4" {...props} />
    ),
    code: (props: React.ComponentProps<"code">) => (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono" {...props} />
    ),
    pre: (props: React.ComponentProps<"pre">) => (
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />
    ),
    iframe: (props: React.ComponentProps<"iframe">) => (
        <iframe
            {...props}
            className="aspect-video w-full rounded-lg mb-4"
        />
    ),
};

const options: MDXRemoteProps["options"] = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [
                rehypeExternalLinks,
                { target: "_blank", rel: "nofollow noopener noreferrer" },
            ],
            rehypeSlug,
        ],
    },
};

export function MDX({ code }: { code: string }) {
    return <MDXRemote source={code} components={components} options={options} />;
}