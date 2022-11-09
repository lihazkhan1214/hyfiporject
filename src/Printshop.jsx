import React from "react";
import bkimg from '../src/images/printshop3.jpg';
import Maincomponents from "./Manicomponenst";
import CliburnBehin from "./CliburnBehin";

const Printshop=()=> {
    let h="Live at the print shop";
    let para1="";
    let para2="";
    let btn="Watch";
    return ( <>
        
        
        <Maincomponents heading={h} para1={para1} para2={para2} btn={btn} bkimg={bkimg}></Maincomponents> 

        <CliburnBehin h="LIVE PREMIERES" />
        </> );
}

export default Printshop;