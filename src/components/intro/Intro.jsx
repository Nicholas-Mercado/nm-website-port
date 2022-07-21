import "./intro.scss"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Typewriter from 'typewriter-effect';

export default function Intro( ) {

  new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });
  

  return (
    <div id="intro" className="intro">
      <div className="top">
        <div className="wrapper">
          <h2> Hi! I'm</h2>
          <h1> Nicholas Mercado</h1>
          <h2 ><Typewriter 
           options={{ 
           strings:["Developer", "Coder", "Problem Solver", "Creator"],
           autoStart:true,
           delay:75,
           loop:true
           }}
           /> </h2>

          <a href="#portfolio">
            <KeyboardArrowDownRoundedIcon 
              style={{ color: '#fffeff',fontSize: 80 }}
            />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="imgContainer">
          <img src="assets/me.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}

