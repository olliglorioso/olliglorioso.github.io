import React from "react"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import Model from "../Models3D/Fromblender"
import DarkModel from "../Models3D/Fromblender_darker"
import { useTheme } from "@mui/material/styles"
import Planes from "./Planes"


export default function About() {
    const theme = useTheme()
    const isDark = theme.palette.background.default === "#000000"
    return (
        <div style={{ height: "90vh", width: "100vw", marginTop: 10, marginLeft: "auto", marginRight: 10}}>
            <Canvas shadows>
                <directionalLight 
                    position={[10, 10, 5]} 
                    color={isDark ? "#75200E" : "white"}
                    intensity={isDark ? 0.3 : 2} 
                />
                <directionalLight 
                    position={[-10, -10, -5]} 
                    intensity={isDark ? 0.6 : 1}
                    castShadow 
                />
                <Physics>
                    <Planes />
                    {isDark ? <DarkModel theme={theme} /> : <Model theme={theme} />}
                </Physics>
            
            </Canvas>
        </div>
    )
}