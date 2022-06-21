/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react"
import ButtonAppBar from "./components/ButtonAppBar"
import Blog from "./components/Blog"
import About from "./components/About"
import Projects from "./components/Projects"
import CssBaseline from "@mui/material/CssBaseline"
// Dark mode stuff
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { designConfigure } from "./utils/random"
import { ColorModeContext, GlobalSettingsContext } from "./utils/contexts"
type PaletteMode = "light" | "dark";

function App() {
    const originalMode = localStorage.getItem("colorMode") === "dark" ? "dark" : "light"
    const originalHideExtras = localStorage.getItem("hideExtras") === "true" ? true : false
    const [view, setView] = useState("About")
    const [mode, setMode] = React.useState<PaletteMode>(originalMode)
    const [globalSettings, setGlobalSettings] = useState<{ hideExtras: boolean }>({ hideExtras: originalHideExtras })

    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => {
                    localStorage.setItem("colorMode", prevMode === "dark" ? "light" : "dark")
                    return prevMode === "light" ? "dark" : "light"
                })
        
            },
        }),
        [],
    )

    const toggleTheme = () => {
        setGlobalSettings({ hideExtras: !globalSettings.hideExtras })
        localStorage.setItem("hideExtras", String(!globalSettings.hideExtras))
    }

    const value = {
        hideExtras: globalSettings.hideExtras,
        toggleHideExtras: toggleTheme,
    }

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(designConfigure(mode)), [mode])

    return (
        <GlobalSettingsContext.Provider value={value}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div >
                        <ButtonAppBar view={view} setView={setView}  />
                        {view === "Blog" ? <Blog  /> : <></>}
                        {view === "About" ? <About  /> : <></>}
                        {view === "Projects" ? <Projects  /> : <></>}
                    </div>
                    <CssBaseline />
                </ThemeProvider>
            </ColorModeContext.Provider>
        </GlobalSettingsContext.Provider>
        
    
    )
}

export default App
