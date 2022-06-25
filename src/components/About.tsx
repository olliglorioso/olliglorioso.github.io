import React, { useContext, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Model from "../Models3D/Fromblender"
import DarkModel from "../Models3D/Fromblender_darker"
import { useTheme } from "@mui/material/styles"
import Planes from "../Models3D/Planes"
import { GlobalSettingsContext } from "../utils/contexts"
import { Typography } from "@mui/material"
import Markdown from "./Markdown"
import { fetchMarkdown } from "../utils/random"



export default function About() {
    const [source, setSource] = useState("")
    useEffect(() => {
        fetchMarkdown("https://raw.githubusercontent.com/olliglorioso/olliglorioso.github.io-mds/main/about/about.md").then((res) => {
            setSource(res)
        })
    }, [])

    const theme = useTheme()
    const isDark = theme.palette.background.default === "#000000"
    const { hideExtras } = useContext(GlobalSettingsContext)
    return (
        <div style={{ paddingLeft: 10}}>
            <Markdown source={source} />
            {
                !hideExtras
                    ? <div style={{ height: "75vh", width: "95vw"}}>
                        <Canvas shadows>
                            <directionalLight 
                                position={[10, 10, 5]} 
                                color={isDark ? "#75200E" : "white"}
                                intensity={isDark ? 0.3 : 2} 
                            />
                            <directionalLight 
                                position={[-10, -10, -5]} 
                                intensity={isDark ? 0.6 : 5}
                                castShadow 
                            />
                            <Physics
                                gravity={[0, -9.81, 0]}
                            >
                                <Planes />
                                {isDark ? <DarkModel theme={theme} /> : <Model theme={theme} />}
                            </Physics>
                
                        </Canvas>
                    </div>
                    : <div style={{ padding: 10 }}>
                        <Typography>
                            Coming sooner or later... (Blog)
                        </Typography>
                    </div>
                    
            }
        </div>
    )
}