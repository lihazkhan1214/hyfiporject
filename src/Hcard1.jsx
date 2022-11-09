import React from "react";
import "./App.css";
const Hcard1 = (props) => {
  return (<>

    <div className="col-md-3">


      <div className="card p-1" >
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-title text-center">{props.title}</p>
        </div>
      </div>
    </div>


  </>);
}

export default Hcard1;