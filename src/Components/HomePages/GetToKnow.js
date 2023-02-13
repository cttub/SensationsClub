import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../../Styles/know.css';
import {Route, Link, BrowserRouter} from 'react-router-dom';

class GetToKnow extends Component {
    state = {  } 
    render() { 
        return (
            <div id='getToKnow' className='cb-fullpage center-container'>
                   
                   <div className='col-lg-9 col-md-11'>


                           <div id = "title-container" className='center-container'>
                                    <Fade><p className='title fancy-heading text-center'>Get to know our Beautiful Girls</p></Fade>
                            </div>
             
                            <div id = "main-container">
                               <Fade left duration = {1500}><div className='first-column hideSmall col-lg-5 col-md-5'></div></Fade> 
                                <div className='second-column col-lg-8 col-md-8 col-sm-12'>
                                <Fade right duration = {1500}> <div className='top-row margin-px'></div> </Fade>
                                        <div className='bottom-row'>
                                            <Fade up duration = {1500}><div className='first-inner-column col-lg-6 col-md-6 col-sm-12'></div> </Fade>
                                            <Fade up duration = {1500}> <div className='second-inner-column col-lg-6 col-md-6 col-sm-12'></div></Fade>
                                        </div>
                                </div>
                            </div>
                            

                            <Fade duration = {3000}><div className='center-container'>
                                        <Link class = "navItems" 
                                            onClick={() => {
                                                            document.querySelector("html").scrollTo(0,0);
                                                            }}
                                                            to = "/Services">
                                        <div className='logo-spot navItem'><button>See our Services</button></div></Link>
                                
                                
                            </div></Fade> 
                   </div>


            </div>
        );
    }
}
 
export default GetToKnow;