import React from "react";
import { useRef } from "react";
import Hcard2andcard3 from "./Hcard2andcard3";
import Hcard3data from "./Hcard3data";
import { Link } from "react-router-dom";
const Hdr= ()=> {
    let ref=useRef(null);

    const  fun1=()=>
{
 const el=ref.current;
el.classList.toggle("flex-nowrap");
}

    return ( <>
     <div className="container">



        <div className="row gy-3 mt-5">
        <div className="col-12 d-flex justify-content-between">
       
           
            <h1  className="home-heading">4K HDR</h1>
          
            <button className="sell-btn" onClick={fun1}>See All</button> 


        </div>

        <div className="col-12">
            <div className="row gy-3 overflow-auto d-flex flex-nowrap" ref={ref}>

                {
                    Hcard3data.map((val, ind) => {
                        return <Hcard2andcard3 key={ind} title={val.title} imgsrc={val.imgsrc} heading={val.heading} para={val.para} />
                    })
                }
            </div>
        </div>
    </div>
    </div>
        </> );
}

export default Hdr;