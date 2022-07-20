import { useState } from "react";
import "./portfolio.scss";
import dataN from './data.js';

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < dataN.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {dataN.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                  </div>
                  <h2>{d.projectName}</h2>
                  <p>{d.description}</p>
                </div>
              </div>
              <div className="right">
              <img className="projectImg" src={d.img} alt=""/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/test1.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/test1.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
