import Hcard1 from "./Hcard1";
import { useRef } from "react";
import Hcdata4 from './Hcdata4';


const Stl= ()=> {

    const ref=useRef(null);
    const fun1=()=>
    {
const el=ref.current;
el.classList.toggle("flex-nowrap");
    }
    return ( <>
        <div className="container mt-5">
        
        
            <div className="row gy-3 ">
                <div className="col-12 d-flex justify-content-between">
                  
                    
                    <h1  className="home-heading">STL PRIDEFEST 2020</h1>
                  
                    <button className="sell-btn" onClick={fun1}>Sell All</button> 


                </div>

                <div className="col-12">
                    <div className="row gy-3 overflow-auto d-flex flex-nowrap" ref={ref}>

                        {
                            Hcdata4.map((val, ind) => {
                                return <Hcard1 key={ind} title={val.title} imgsrc={val.imgsrc} />
                            })
                        }
                    </div>
                </div>
            </div>
            </div>
        
        
        
        </> );
}

export default Stl;