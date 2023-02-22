import React, { Component } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Footer from '../Footer';
class Work extends Component {
    state = {  } 
    render() { 
        return (
            <div id='work'>
                <div className='center-container'>
                    <div id = "workIMG" className='col-lg-3 col-md-4 hideSmall'></div>
                    <div id='workText'>
                        <p className='fancy-heading'>Work with Us</p>
                        <p className='fancy-subheading'>Wanna be a dancer, bouncer, waitress or DJ?</p>
                    

                    <Fade bottom><div className='center-container'><Link
                                onClick={() => {
                                                document.querySelector("html").scrollTo(0,0);
                                                }}
                                                to = "/Apply">
                            <div className='navItem cb-paragraph'><button>Apply Now</button></div></Link>
                        </div> </Fade>
                    </div>
                </div>
               
                
            </div>
        );
    }
}
 
export default Work;