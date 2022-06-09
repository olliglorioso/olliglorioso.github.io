import React, { useState } from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import Blog from './components/Blog';
import About from "./components/About"

function App() {
  const [view, setView] = useState("About")
  return (
    <div >
      <ButtonAppBar view={view} setView={setView}/>
      {view === "Blog" ? <Blog /> : <></>}
      {view === "About" ? <About /> : <></>}
    </div>
  );
}

export default App;
