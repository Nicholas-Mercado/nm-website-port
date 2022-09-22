import "./portfolion.scss";
import data from './data.js';




export default function Portfolion() {

  
  return (
    <>
        <div className="portfolio">
            <div className="cardholder">
                {data.map((data, index) => ( 
                    <div  >
                        <div  className="card">
                            <div className="card-size">
                                <img src={data.img} alt="Nature" /> 
                                <h3>{data.projectName}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div> 
    </>
  );
}
