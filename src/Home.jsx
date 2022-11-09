import React from "react";
import Maincomponents from "./Manicomponenst";

import Whatnew from "./Whatnew";
import Cliburn from "./Cliburn";
import Hdr from "./Hdr";
import Stl from "./Stl";
import Explore from "./Explore";
import Ourchannel from "./Ourchannel";
import bkimg from "../src/images/home.png";


const Home = () => {
    let h="Josh Kelly";
    let para1="Josh Kelley stops by for a performance in the latest episode";
    let para2="of Live At The Print Shop";
    let btn="Explore";
    return (<>
        
<Maincomponents heading={h} para1={para1} para2={para2} btn={btn} bkimg={bkimg}></Maincomponents>

        <Whatnew ></Whatnew>
        <Cliburn></Cliburn>


        <Hdr></Hdr>

        <Explore></Explore>

        <Ourchannel></Ourchannel>
    </>);
}

export default Home;