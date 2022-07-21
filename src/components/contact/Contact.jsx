
import "./contact.scss";

export default function Contact() {
  
  return (
    <>
      
      <div className="contact" id="contact">
        <div className="left">
            <div className="here">
            <div className="title-section">
                  <h2>Contact.</h2>
            </div>
              <h3>
                I'm Here!
              </h3>
              <p >I am always down to grab a coffee and talk!</p>
            </div>
        </div>
        <div className="right">
          <div className="title-section">
                  <h2>Contact.</h2>
          </div>
          <div className="chat">
            <h3>Let's Chat.</h3>
            <a className="links" href="mailto:Nicholasamerc@gmail.com"><p>Email me! Nicholasamerc@gmail.com</p></a>
            <div className="icon-row">
              <a href="https://www.linkedin.com/in/nicholasmercado/">
                <img className="smallIcons" alt="" src="assets/lw.png"/>
              </a>
              <a href="https://github.com/Nicholas-Mercado">
                <img className="smallIcons2" alt="" src="assets/github.png"/>
              </a>
              <a href="https://www.linkedin.com/in/nicholasmercado/">
                <img className="smallIcons1" alt="" src="assets/tw.png"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
