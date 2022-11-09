
import logo from '../src/images/HYFI_Logo (Page 1) 2.png';
import "./App.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NavLink } from "react-router-dom";
const Nbr = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formsub = (e) => {

    e.preventDefault();
    // alert("thanks for sing in");
  }
  const signin = () => {
    alert("thanks for sing in");

  }
  return (<>

    <div classNameName="container">

      <div classNameName="row">

        <div classNameName="col-12 mx-auto">





          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <NavLink className="navbar-brand" to="/home"><img src={logo} className="img-fluid" width="50px" height="50px" alt="..." /></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-light"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link text-light" aria-current="page" to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className=" nav-link text-light" to="/explore">Explore</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light " to="/cliburn">Cliburn</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/hdr">4K HDR</NavLink>
                  </li>

                </ul>
                <span className="navbar-text">

                  <button className="nav-btn" onClick={handleShow}>
                    Sign in
                  </button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>

                    </Modal.Header>
                    <Modal.Body>


                      <Form className='text-center' onSubmit={formsub}>
                        <ButtonGroup aria-label="Basic example">
                          <button className='m-3 signin-active form-btn'> Sign in</button>
                          <button className='m-3 signup form-btn'> Sign up</button>


                          
                        </ButtonGroup>

                        <hr />
                        <div className="form-google my-3 d-flex justify-content-center align-items-center">
                          <ion-icon name="logo-google" className="bg-danger"></ion-icon>

                          <NavLink to="" className="form-links ">Sign up with Google</NavLink>

                        </div>
                        OR
                        <hr />
                        <Form.Group className="mb-3 " controlId="formBasicPassword">

                          <Form.Control type="text" placeholder="email" />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicPassword">

                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <button className='form-btn sign-sub' type="sign in" onClick={signin}>
                          Sign in
                        </button>
                        <h6 className='form-heading'>Don’t have an account? Sign up</h6>
                      </Form>



                    </Modal.Body>

                  </Modal>
                </span>
              </div>
            </div>
          </nav>


        </div>

      </div>



    </div>
  </>);
}

export default Nbr;