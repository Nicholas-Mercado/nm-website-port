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
                  
                  <div className="other">
                    <h3>Currently studying</h3>
                    <p>I am studying to take my Cloud practitioner exam from AWS.</p>
                    <p>Link place holders</p>
                  </div>
                </div>

              </div>
          </div>  
          
        </div>
    </>
  )
}
