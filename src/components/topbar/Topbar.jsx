import "./topbar.scss"

export default function Topbar({menuOpen, toggleMenu}) {
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
      <div className="wrapper">
        <div className="left">
          
            <a href="#intro" className="logo" >
              Nicholas Mercado
            </a>
            <div>
              <a href="https://www.linkedin.com/in/nicholasmercado/" target="_blank" rel="noreferrer">
                <img className="smallIcons" alt="" src="assets/lw.png"/>
              </a>
              <a href="https://www.linkedin.com/in/nicholasmercado/" target="_blank" rel="noreferrer">
                <img className="smallIcons1" alt="" src="assets/tw.png"/>
              </a>
            </div>
            
        </div>

        <div className="right">
          <div className="hamburger" onClick={toggleMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

