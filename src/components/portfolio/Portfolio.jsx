import { useState } from "react";
import "./portfolio.scss";
import dataN from './data.js';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < dataN.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <>

    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {dataN.map((d, index) => ( 
          <div key={index}  className="container">
            <div className="item">
              <div className="left">
                <div  className="leftContainer">
                  <div className="imgContainer">
                  </div>
                  <h2>{d.projectName}</h2>
                  <p>{d.description}</p>
                  <div>---Links---</div>
                  <a target="_blank" href={d.GitHub} rel="noreferrer" >GitHub</a>
                  <div>
                  { 
                  (d.Jupyter === '')
                  ? <div></div> 
                  : <div>
                      <a target="_blank" href={d.Jupyter} rel="noreferrer" >Jupyter Notebook</a>
                  </div> 
                  }
                    
                  </div>

                </div>
              </div>
              <div className="right">
              <img className="projectImg" src={d.img} alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <KeyboardArrowRightRoundedIcon 
        style={{ color: 'white',fontSize: 100 }}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
          />
      
      <KeyboardArrowRightRoundedIcon 
        style={{ color: 'white',fontSize: 100 }}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
          />
    </div>
      
    </>
  );
}
