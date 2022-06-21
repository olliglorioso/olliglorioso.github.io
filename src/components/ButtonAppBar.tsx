import React, { useContext, Dispatch, SetStateAction } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { SocialIcon } from "react-social-icons"
import "./styles.css"
import CollapseButton from "./CollapseButton"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"
import IconButton from "@mui/material/IconButton"
import Switch from "@mui/material/Switch"
import { ColorModeContext } from "../utils/contexts"
import { useTheme } from "@mui/material/styles"
import { isMobile } from "../utils/random"
import { urls } from "../utils/constants"
import { GlobalSettingsContext } from "../utils/contexts"
import { Tooltip } from "@mui/material"
interface Props {
  view: string,
  setView: Dispatch<SetStateAction<string>>,
}

export default function ButtonAppBar({ view, setView }: Props) {

    const mobile = isMobile()
    const copy = () => {
        navigator.clipboard.writeText("Olli Glorioso")
    }
    const iconSize = mobile ? 18 : 30
    const socialIcon = { height: iconSize, width: iconSize, marginRight: iconSize / 3 }
    const colorMode = useContext(ColorModeContext)
    const theme = useTheme()
    const isDark = theme.palette.background.default === "#000000"
    const { hideExtras, toggleHideExtras } = useContext(GlobalSettingsContext)

    return (
        <Box sx={{ flexGrow: 1 }} component="div">
            <AppBar position="static" sx={{ backgroundColor: "background.paper" }} >
                <Toolbar component={"div"} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div>
                        <Button onClick={() => copy()} sx={{ flexGrow: 0, color: "black" }}>
                            <Typography variant={mobile ? "inherit" : "h6"} sx={{ color: "text.primary"}} >
                                OLLI GLORIOSO
                            </Typography>
                        </Button> 
                    </div>
                    <div>
                        {Object.values(urls).map((url, index) => <SocialIcon url={url} key={index} style={socialIcon} />)}
                    </div>
                    <div>
                        <Tooltip title="Hide extras.">
                            <Switch checked={!hideExtras} color="default" onChange={() => toggleHideExtras()} sx={{ opacity: 100 }} />
                        </Tooltip>
                        
                        {!mobile ?
                            <>
                                <Button sx={{ color: "black"}}>
                                    <a href={`${process.env.PUBLIC_URL}/pdf-open-parameters.pdf`} download="olliglorioso_resume" style={{ color: theme.palette.text.primary, textDecoration: "none" }} >Resume</a>
                                </Button>
                                <Button onClick={() => setView("Blog")} sx={{ color: view === "Blog" ? "text.secondary" : "text.primary"}}>Blog</Button>
                                <Button onClick={() => setView("About")} sx={{ color: view === "About" ? "text.secondary" : "text.primary" }}>About</Button>
                                <Button onClick={() => setView("Projects")} sx={{ color: view === "Projects" ? "text.secondary" : "text.primary" }}>Projects</Button>
                                <Tooltip title={isDark ? "Toggle light mode." : "Toggle dark mode."}>
                                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
                                    </IconButton>
                                </Tooltip>
                            </>
                            : <CollapseButton setView={setView} view={view} />
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}