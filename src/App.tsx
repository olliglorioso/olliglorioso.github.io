import React, { useState } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Blog from './components/Blog';
import About from "./components/About"
import Projects from './components/Projects';

function App() {
  const [view, setView] = useState("About")
  return (
    <div >
      <ButtonAppBar view={view} setView={setView}/>
      {view === "Blog" ? <Blog /> : <></>}
      {view === "About" ? <About /> : <></>}
      {view === "Projects" ? <Projects /> : <></>}
    </div>
  );
}

export default App;
