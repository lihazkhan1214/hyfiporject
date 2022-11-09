import React from "react";
import icon from '../src/images/competition.png';

const Competition = () => {




    return (<>
        <div className="col-md-3">


        <div className="card card-competition p-1" >
            <div className="d-flex justify-content-center align-items-center mt-5">
                <img src={icon} className="card-img-top " alt="..." style={{ width: "121px", height: "121px" }} /></div>
            <div className="card-body">
                <p className="card-title text-center">Quatarfinal Round</p>
            </div>
        </div>
    </div>
    </>);
}

export default Competition;