import React, { useEffect, useState } from "react"
import Markdown from "./Markdown"
import { fetchMarkdown } from "../utils/random"

export default function Blog() {
    const [source, setSource] = useState("")

    useEffect(() => {
        fetchMarkdown("https://raw.githubusercontent.com/olliglorioso/olliglorioso.github.io-mds/main/blogs/test.md").then((res) => {
            setSource(res)
        })
    }, [])
    return (
        <div style={{ padding: 10 }}>
            <Markdown source={source} />
        </div>
    )
}

