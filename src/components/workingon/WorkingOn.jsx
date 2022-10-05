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
                    <h3>DND-Bot</h3>
                    <p> Stuff and details about the dnd bot</p>
                  </div>
                </div>
                <div className="right">
                  <div className="youtube">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/xc1VpbRd4is" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
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
