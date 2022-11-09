import React from "react";
import bkimg from '../src/images/cliburnchannel.png';
import Maincomponents from "./Manicomponenst";
import Competition from "./Competition";
import CliburnBehin from "./CliburnBehin";
const Cliburnchannel=()=> {
    let h="Yunchan Lim";
    let para1="2022 Final Concerto 3 - Yunchan Lim";
    let para2="16-17-2022";
    let btn="Watch";
    return ( <>
        
        <Maincomponents heading={h} para1={para1} para2={para2} btn={btn} bkimg={bkimg}></Maincomponents>
        

        <div className="container mt-5">
        <div className="row gy-3 ">
            <div className="col-12 d-flex justify-content-between">
                <h1 className="home-heading">Competition</h1>



            </div>

            <div className="col-12">
                <div className="row gy-3 " >
                 <Competition></Competition>
                 <Competition></Competition>
                 <Competition></Competition>
                 <Competition></Competition>
                </div>
            </div>
        </div>
    </div>
        <CliburnBehin h="Behind The Scene"></CliburnBehin>
        </> );
}

export default Cliburnchannel;