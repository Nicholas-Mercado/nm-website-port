import "./portfolion.scss";
import data from './data.js';

export default function Portfolion() {
  return (
<>                 
    <div className="scene portfolio">
    {data.map((data, index) => ( 
        <div className="container">
            <div className="row flip-boxes">
                <div className="col-md-3 col-sm-4 col-8 flip-box">
                    <div className="front" >
                        <img src={data.img} alt="project img"></img>
                        <div className="content text-center">
                        <h2>{data.projectName}</h2>
                        <span className="click-for-more">
                        </span>
                        </div>
                    </div>
                <div className="back">
                    <div className="content">
                    First Back
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
