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
           strings:["Developer", "Coder", "Problem Solver", "Photographer"],
           autoStart:true,
           delay:75,
           loop:true
           }}
           /> </h2>

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

