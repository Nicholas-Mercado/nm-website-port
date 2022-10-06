import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import WorkingOn from "./components/workingon/WorkingOn"
import Portfolio from "./components/portfolio/Portfolio"
import Portfolion from "./components/portfolio/Portfolion"
// import AboutMe from "./components/aboutMe/AboutMe"
import Contact from "./components/contact/Contact"
import "./app.scss"
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, toggleMenuOpen] = useState(false)

  function toggleMenu() {
    toggleMenuOpen(!menuOpen)
  }

  return (

    <div className="app">
      <Topbar menuOpen={menuOpen}
        toggleMenu={toggleMenu} />
      <Menu menuOpen={menuOpen}
        toggleMenu={toggleMenu}/>
      <div className="sections">
        <Intro menuOpen={menuOpen} />
        <Portfolion />
        <Portfolio />
        <WorkingOn/>
        {/* <AboutMe /> */}
        <Contact />

      </div>
    </div>

  );
}

export default App;
