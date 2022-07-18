import "./intro.scss"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function Intro({ menuOpen }) {
  return (
    <div id="intro" className="intro">
      <div className="top">
        <div className="wrapper">
          <h2> Hi! I'm</h2>
          <h1> Nicholas Mercado</h1>
          <h3> placeholder<span></span></h3>

        </div>
        <a href="#portfolio">
          <KeyboardArrowDownRoundedIcon 
            style={{ color: '#f4e04e',fontSize: 90 }}
          />
        </a>
      </div>
      <div className="bottom">
        <div className="imgContainer">
          <img src="assets/test2.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}

