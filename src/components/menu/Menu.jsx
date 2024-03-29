import "./menu.scss"


export default function Menu({menuOpen, toggleMenu}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>toggleMenu(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>toggleMenu(false)}>
                <a href="#portfolion">Portfolio</a>
            </li>
            {/* <li onClick={()=>toggleMenu(false)}>
                <a href="#aboutMe">About Me</a>
            </li> */}
            <li onClick={()=>toggleMenu(false)}>
                <a href="#workingon">Current Projects</a>
            </li>
            <li onClick={()=>toggleMenu(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
