import React from "react";
import { NavLink } from "react-router-dom";
const Hchannelcard= ()=> {
    return ( <>
        
        <div className="col-md-4">


                            <div className="card channel-card p-1" >
                               
                                <div className="card-body my-2 channerimg text-center d-flex align-items-end justify-content-center" >
                                    
                                <h5 className="card-title ">Live at the print shop</h5>
                                    
                                </div>
                                <button className="home-btn btn-primary my-2 mx-auto channel-btn"><NavLink className="text-decoration-none text-light" to="/printshop">Visit Now</NavLink></button>
                            </div>


                        </div>
       
        
        
        
        
        </> );
}

export default Hchannelcard ;