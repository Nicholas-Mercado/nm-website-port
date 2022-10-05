import "./portfolion.scss";
import data from './data.js';

export default function Portfolion() {
  return (
<>                 
    <div className="scene portfolio">
    {data.map((data, index) => ( 
        <div key={data.id} className="container">
        
            <div className="row flip-boxes">
                <div className="col-md-3 col-sm-4 col-8 flip-box">
                    <div className="front" >
                        <img id="imgs" src={data.img} alt="project img" />
                        <div className="content text-center">
                        <h2>{data.projectName}</h2>
                        <span className="click-for-more">
                        </span>
                        </div>
                    </div>
                <div className="back">
                    <div className="content">
                    {data.description}
                    <div>
                    <div>---Links---</div>
                        <a target="_blank" href={data.GitHub} rel="noreferrer" >GitHub</a>
                        <div>
                        { 
                        (data.Jupyter === '')
                        ? <div></div> 
                        : <div>
                            <a target="_blank" href={data.Jupyter} rel="noreferrer" >Jupyter Notebook</a>
                        </div> 
                        }
                            
                        </div>

                    </div>
                    </div>
                </div>
                </div>
    
            </div>
        </div>
    ))}
    </div>
</>
);
}
