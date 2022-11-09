import React from "react";
import { useRef } from "react";
import Hcard1 from "./Hcard1";
import Hcard1data from "./Hcard1data";

const Whatnew=()=> {
let ref =useRef(null);
const  fun1=()=>
{
// const element=document.getElementById("toggle-btn");
// element.classList.toggle("flex-nowrap");
// console.log(element);
const el=ref.current;
el.classList.toggle("flex-nowrap");


}


    return ( <>
        <div className="container mt-5">
        <div className="row gy-3 ">
                <div className="col-12 d-flex justify-content-between">
                    <h1  className="home-heading">What’s New</h1>
                  
                    <button className="sell-btn" onClick={fun1}>See All</button> 

                </div>

                <div className="col-12">
                    <div className="row gy-3 overflow-auto  flex-nowrap" ref={ref}>

                        {
                            Hcard1data.map((val, ind) => {
                                return <Hcard1 key={ind} title={val.title} imgsrc={val.imgsrc} />
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
        </> );
}

export default Whatnew;