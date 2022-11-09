import React from "react";
const Hcard2andcard3 = (p) => {
    return (<>

        <div className="col-md-3" >

            <div className="card p-1" >
                <img src={p.imgsrc} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-heading text-center">BY <span>{p.heading}</span></p>
                    <p className="card-text text-center">{p.para}</p>
                </div>
            </div>


        </div>

    </>);
}

export default Hcard2andcard3;