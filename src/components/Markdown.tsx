import React from "react"
import { Button } from "@mui/material"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css" // `rehype-katex` does not import the CSS for you
import rehypeRaw from "rehype-raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { gruvboxLight, gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { ContentCopy } from "@mui/icons-material"
import { useTheme } from "@mui/material/styles"

interface Props {
    source: string
}

export default function Markdown ({ source }: Props): JSX.Element {
    const isDark = useTheme().palette.background.default === "#000000"
    const copyCode = (codeString: string) => {
        navigator.clipboard.writeText(codeString)
    }
    return (
        <ReactMarkdown 
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]} 
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "")
                    return !inline && match ? (
                        <div style={{ display: "flex", flexDirection: "row"}}>
                            <div style={{ flexGrow: 1 }}>
                                <SyntaxHighlighter
                                    language={match[1]}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    style={isDark ? (gruvboxDark as any) : (gruvboxLight as any)}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            </div>
                            <div >
                                <Button onClick={() => copyCode(String(children))} sx={{ marginTop: 1}}>
                                    <ContentCopy sx={{ color: isDark ? "white" : "black" }}/>
                                </Button>
                            </div>
                                
                            
                        </div>
                    ) : (
                        <code className={className} {...props}>
                            {source}
                        </code>
                    )
                }
            }}
        >
            {source}
        </ReactMarkdown>
    )
}