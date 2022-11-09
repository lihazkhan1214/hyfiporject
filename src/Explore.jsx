import React from "react";

import Hcard5data from "./Hcard5data";
import Hcard2andcard3 from "./Hcard2andcard3";

const Explore= ()=> {

    const  fun1=()=>
{
const element=document.getElementById("toggle-btn");
element.classList.toggle("flex-nowrap");

}
    return ( <>
<div className="container mt-5">


        <div className="row gy-3 ">
        <div className="col-12 d-flex justify-content-between">
        <h1  className="home-heading">Explore</h1>
          
        <button className="sell-btn" onClick={fun1}>See All</button> 


        </div>

        <div className="col-12">
            <div className="row gy-3 overflow-auto  flex-nowrap" id="toggle-btn">

                {
                    Hcard5data.map((val, ind) => {
                        return <Hcard2andcard3 key={ind} title={val.title} imgsrc={val.imgsrc} heading={val.heading} para={val.para} />
                    })
                }
            </div>
        </div>
    </div>
    </div>
        </> );
}

export default Explore;