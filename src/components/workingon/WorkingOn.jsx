import "./workingon.scss"

export default function WorkingOn() {
  return (
    <>
        <div className="workingon" id="workingon">
          
            <div className="container">
                <h2>What I am Working on!</h2>
              <div className="card">
                <div className="left">
                  <div className="details">
                    <h3>Current Project</h3>
                    <h4>dnd-bot</h4>
                    <p> I stumbled on a Dungeons and Dragons API and knew I had to build something with it. Dnd-bot's first version is a discord bot where you can use a slash command to return a random fact about the DnD 5e gaming system. I am using the Hikari python microframework to communicate with discord API. I highly recommend it. Great docs!
                    </p>
                    <div className="next-s">
                      <h5>Next Steps:</h5>
                      <li>Build more tests</li>
                      <li>Host code</li>
                      <li>Update readme</li>
                      <li>Intro video</li>
                    </div>
                      <h5>Resource & Links</h5>
                    <div className="resources">
                      <a target="_blank" href="https://github.com/Nicholas-Mercado/dnd-bot" rel="noreferrer" >GitHub</a>
                      <a target="_blank" href="https://github.com/hikari-py/hikari" rel="noreferrer" >Hikari</a>
                      
                      <a target="_blank" href="https://www.dnd5eapi.co/" rel="noreferrer" >D&D 5e API</a>
                  </div>
                  </div>
                </div>
                <div className="right">
                  
                <div className="details-r">
                    <h3>Current Studying</h3>
                    <h4>AWS Certified Cloud Practitioner Certification</h4>
                    <p> I am currently studying to take my AWS Cloud Practitioner exam. If you are interested, I have some resources I am using to study for the exam below.
                    </p>
                    <img src="assets/cp_image.png" alt="AWS CCP Logo"/>
                      <h5>Resource & Links</h5>
                    <div className="resources">
                      <a target="_blank" href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new" rel="noreferrer" >Udemy</a>
                      <a target="_blank" href="https://www.youtube.com/watch?v=SOTamWNgDKc" rel="noreferrer" >AWS Certified Cloud Practitioner Certification Course</a>
                      
                      <a target="_blank" href="https://aws.amazon.com/certification/certified-cloud-practitioner/" rel="noreferrer" >AWS Site</a>
                  </div>
                  </div>
                </div>

              </div>
          </div>  
          
        </div>
    </>
  )
}
