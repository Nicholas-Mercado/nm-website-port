import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, toggleMenuOpen] = useState(false)
  return (

      <div className="app">
        <Topbar menuOpen={menuOpen} 
                toggleMenuOpen={toggleMenuOpen}/>
        <div className="sections">
          <Intro menuOpen={menuOpen}/>
          <Portfolio/>
          <Project/>
          <Contact/>

        </div>
      </div>

  );
}

export default App;
