import React from "react";

import Hcard2andcard3 from "./Hcard2andcard3";

import Hcard2data from "./Hcard2data";
const CliburnBehin = (p) => {

    return ( <>


        <div className="container mt-5">



            <div className="row gy-3 ">
                <div className="col-12 d-flex justify-content-between">

                    <h1 className="home-heading">{p.h}</h1>

                   


                </div>

                <div className="col-12">
                    <div className="row gy-3 "  >

                        {
                            Hcard2data.map((val, ind) => {
                                return <Hcard2andcard3 key={ind} title={val.title} imgsrc={val.imgsrc} heading={val.heading} para={val.para} />
                            })
                        }
                    </div>
                </div>
            </div>
            </div>

        </> );
}

        export default CliburnBehin;