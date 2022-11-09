import Hchannelcard from "./Hchannelcard";
import Hchannelcard2 from "./Hchannelcard2";

const Ourchannel=()=> {
    return ( <>
        
        <div className="container">


        







            <div className="row gy-3 mt-5">
                <div className="col-12 ">
                    <h1 className="home-heading">Our CHANNELS</h1>


                </div>

                <div className="col-12">
                    <div className="row gy-3">

                        <Hchannelcard></Hchannelcard>
                        <Hchannelcard2></Hchannelcard2>

                    </div>
                </div>
            </div>

           
        </div>
        </> );
}

export default Ourchannel;