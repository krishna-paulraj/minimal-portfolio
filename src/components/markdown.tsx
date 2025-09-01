import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// import { UTM_PARAMS } from "@/config/site";
// import { rehypeAddQueryParams } from "@/lib/rehype-add-query-params";

export function Markdown(props: React.ComponentProps<typeof ReactMarkdown>) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
                rehypeRaw,
                [
                    rehypeExternalLinks,
                    {
                        target: "_blank",
                        rel: "nofollow noopener noreferrer",
                        properties: {
                            style: "text-decoration: underline;"
                        }
                    },
                ],
            ]}
            components={{
                ul: ({ children, ...props }) => (
                    <ul className="list-disc pl-4 space-y-1" {...props}>
                        {children}
                    </ul>
                ),
                li: ({ children, ...props }) => (
                    <li className="text-gray-600 dark:text-gray-400" {...props}>
                        {children}
                    </li>
                ),
                a: ({ children, href, ...props }) => (
                    <a
                        href={href}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                    >
                        {children}
                    </a>
                ),
            }}
            {...props}
        />
    );
}