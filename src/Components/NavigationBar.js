import React, { Component } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import logo from '../Assets/logo.png';
import Fade from 'react-reveal/Fade';

import '../Styles/nav.css';
class TitoWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://js.tito.io/v2';
      script.async = true;
      document.head.appendChild(script);
    }
  
    render() {
      return  <tito-button event="sensationsgc/booking">Book Now</tito-button>;;
    }
  }
class NavigationBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <Fade top> <div id = "navigationBar" className='darkRed-bg'>

                    <div className='leftNav'>
                    <Link class = "navItems" 
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/">
                        <div className='logo-spot navItem'><img  className = 'logoImage' src={logo}/></div></Link>

                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Services">
                        <div className='navItem cb-paragraph'>Services</div>
                        </Link>
                        
                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Drinks">
                        <div className='navItem cb-paragraph'>Drinks</div>
                        </Link>

                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div className='navItem cb-paragraph'>Visit</div>
                        </Link>
                
                        <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Apply">
                        <div className='navItem cb-paragraph'>Apply</div>
                        </Link>



                    </div>
                    <div className='rightNav'>
                        <TitoWidget/>
                    </div>
            </div></Fade> 

        
            </div>
        );
    }
}
 
export default NavigationBar;