import React, { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import MDEditor from "@uiw/react-md-editor"
import { useTheme } from "@mui/material/styles"
import axios from "axios"

export default function Blog() {
    const { palette: { background, text }} = useTheme()
    const [source, setSource] = useState("")
    const fetchBlogsTexts = async () => {
        try {
            const url = "https://raw.githubusercontent.com/olliglorioso/olliglorioso.github.io-mds/main/blogs/test.md"
            const res = await axios.get(url)
            setSource(res.data)
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
            <div className="container">
                <MDEditor.Markdown 
                    source={source} 
                    style={{ 
                        whiteSpace: "pre-wrap", 
                        backgroundColor: background.paper, 
                        color: text.primary 
                    }} 
                />
            </div>
            
        </div>
    )
}

