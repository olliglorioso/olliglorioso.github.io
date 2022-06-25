import React, { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css" // `rehype-katex` does not import the CSS for you
import rehypeRaw from "rehype-raw"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {dark} from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Blog() {
    const [source, setSource] = useState("")
    const fetchBlogsTexts = async () => {
        try {
            const url = "https://raw.githubusercontent.com/olliglorioso/olliglorioso.github.io-mds/main/blogs/test.md"
            const res = await axios.get(url)
            const d = res.data
            setSource(d)
        } catch (e) {
            throw new Error("Failed to fetch blog texts. Check your internet connection.")
        }
    }

    useEffect(() => {
        fetchBlogsTexts()
    }, [])
    return (
        <div style={{ padding: 10 }}>
            <Typography>
            Coming sooner or later... (Blog)
            </Typography>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex, rehypeRaw]} 
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "")
                        return !inline && match ? (
                            <SyntaxHighlighter
                                language={match[1]}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                style={dark as any}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
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
        </div>
    )
}

