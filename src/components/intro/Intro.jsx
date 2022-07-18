import "./intro.scss"


export default function Intro({ menuOpen }) {
  return (
    <div id="intro" className="intro">
      <div className="top"></div>
      <div className="bottom">
        <div className="imgContainer">
          <img src="assets/pic1.jpg" alt=""></img>
        </div>
      </div>
    </div>
  )
}

