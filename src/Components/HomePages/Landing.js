import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "home-landing" className='center-container cb-fullpage'>

                <div className='text-center'>
                   <Fade><p className='fancy-heading'>Sensations Gentleman's Club</p></Fade> 
                    <p className='fancy-subheading'>Home of the naked ladies</p>
                   
                   
                    <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div className='navItem cb-paragraph'> <button>Visit Us</button></div>
                        </Link>
                   
                   
                </div>
            </div>
        );
    }
}
 
export default Landing;