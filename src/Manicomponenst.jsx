const Maincomponents = (p) => {
    return (<>

        <div className="container-fluid home d-flex  flex-column justify-content-center"  style={{backgroundImage: `url(${p.bkimg})` }}>
        <div className="row  ">
            <div className="col-12 col-md-10 mx-auto text-center  d-flex flex-column align-content-center " >
                <h1 className="heading my-3">{p.heading}</h1>
                <p className=" para my-3">{p.para1}
                </p>
                <p className=" para ">{p.para2}.</p>
                <button className="home-btn my-3 mx-auto">{p.btn}</button>
            </div>
</div>





        </div>

    </>);
}

export default Maincomponents;