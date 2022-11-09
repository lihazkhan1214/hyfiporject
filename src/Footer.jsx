import React from 'react';
import logo from '../src/images/HYFI_Logo (Page 1) 2.png';
import { NavLink } from 'react-router-dom';
import pic1 from '../src/images/playstore.png';
import pic2 from '../src/images/apple.png';
import pic3 from '../src/images/oku.png';
const Footer=()=> {
    return ( <>
        
        <div className='container-fluid d-flex justify-content-center footer mt-5 ' >
        <div className='container'>
        <div className="row mt-5 gy-3 d-flex flex-coloumn align-content-center">

        <div className="col-lg-4 mx-lg-auto">
            <img src={logo} className="img-fluid.logo" alt="..." height="50px" width="50px"   />

            <p className="para my-2">


                HYFI is now available on iOS, Android, Roku, AppleTV, Chromecast, and Firestick.
                Use our website to purchase content
            </p>

        </div>

        <div className="col-lg-2 d-flex justify-content-center">
        
       
        <ul>

        <li>
        <NavLink to="/about" className="text-center"><strong>About Us</strong></NavLink></li>
        <li className="mt-4">
        <NavLink to="/" className='  links'>About HYFI</NavLink></li>
       <li> <NavLink to="/ourchannel" className='links'>Channels</NavLink></li>
        <li><NavLink to="/" className='links'>Sign in</NavLink></li>
        </ul>
        </div>
        <div className="col-lg-2 d-flex justify-content-center">
        <ul >

        
        <NavLink to="/explore" className="text-center"><strong>Explore</strong></NavLink>
        <li className="mt-4">
        <NavLink exact to="/whatnew" className='links '>What’s new</NavLink></li>
       <li> <NavLink to="/cliburn"className='links'>The Cliburn</NavLink></li>
        <li><NavLink to="/hdr" className='links'>4K HDR</NavLink></li>
        
      <li><NavLink to="/stl" className='links'>  STL Pridefest 2020</NavLink></li>
       <li >
        <NavLink to="/explore" className='links'><strong>Explore</strong></NavLink></li>
        </ul>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center ">
        
        <NavLink to="/cliburnchannel" className='text-center '><strong>Watch On</strong></NavLink>

        <ul className='d-flex justify-content-center flex-column'>

        <li>
        <img src={pic1} className='img-fluid images mt-4' alt=".."  />
        </li>
        <li>
        <img src={pic2} className='img-fluid my-2' alt=".." />
        </li>
        <li>
        <img src={pic3} className='img-fluid '   alt=".." />
        </li>
        </ul>
        </div>
        <div className="col-lg-2  d-flex  flex-column ">
        
        <NavLink to="" className='text-center'><strong>Follow us</strong></NavLink>
        <ul className='d-flex justify-content-center mt-3'>
        <li className='footer-circle'><ion-icon name="logo-instagram" ></ion-icon> </li>
        <li className='footer-circle'><ion-icon name="logo-facebook"></ion-icon></li>
        <li className='footer-circle'> <ion-icon name="logo-twitter"></ion-icon></li>
        <li className='footer-circle'><ion-icon name="logo-youtube"></ion-icon></li>
        </ul>
        
        </div>
    </div>
    </div>
    </div>
        </> );
}

export default Footer;