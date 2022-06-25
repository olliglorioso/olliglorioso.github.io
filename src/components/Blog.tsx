import React, { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import axios from "axios"
import Markdown from "./Markdown"

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
            <Markdown source={source} />
        </div>
    )
}

