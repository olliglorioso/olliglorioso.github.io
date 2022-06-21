import React, { useState } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Blog from './components/Blog';
import About from "./components/About"
import Projects from './components/Projects';
import CssBaseline from "@mui/material/CssBaseline";
// Dark mode stuff
import { ThemeProvider, createTheme } from '@mui/material/styles';

type PaletteMode = "light" | "dark";

const getDesignTokens = (mode: string) => ({
  palette: {
    ...(mode === "dark"
      ? {
          // palette values for light mode
          background: {
            default: "#000000",
            paper: "#000000",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#808080",
          },
        }
      : {
          // palette values for dark mode
          background: {
            default: "#ECE5C7",
            paper: "#CDC2AE",
          },
          text: {
            primary: "#000000",
            secondary: "#808080",
          },
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === "dark" ? "#212121" : "#ECE5C7",
        }
      }
    }
  }
});

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


function App() {
  const originalMode = localStorage.getItem("colorMode") === "dark" ? "dark" : "light"
  const [view, setView] = useState("About")
  const [mode, setMode] = React.useState<PaletteMode>(originalMode);
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          localStorage.setItem('colorMode', prevMode === "dark" ? "light" : "dark")
          return prevMode === 'light' ? 'dark' : 'light'
        })
        
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
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
    
  );
}

export default App;
