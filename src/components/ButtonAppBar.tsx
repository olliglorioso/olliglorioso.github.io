import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SocialIcon } from "react-social-icons"
import "./styles.css"

interface Props {
  view: string,
  setView: any
}

export default function ButtonAppBar({ view, setView }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#CDC2AE" }} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
            Olli Glorioso
          </Typography>
          <SocialIcon url="https://github.com/olliglorioso" style={{ height: 30, width: 30, marginRight: 10 }} />
          <SocialIcon url="https://www.linkedin.com/in/olliglorioso/" style={{ height: 30, width: 30, marginRight: 10 }} />
          <SocialIcon url="https://twitter.com/olliglorioso" style={{ height: 30, width: 30, marginRight: 500 }} />
          <Button sx={{ color: "black" }}>Resume</Button>
          <Button onClick={() => setView("Blog")} sx={{ color: view === "Blog" ? "white" : "black"}}>Blog</Button>
          <Button onClick={() => setView("About")} sx={{ color: view === "About" ? "white" : "black" }}>About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}