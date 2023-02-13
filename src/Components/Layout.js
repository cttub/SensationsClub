import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
import {Route, Link, BrowserRouter} from 'react-router-dom';
import '../App.css';
import '../Styles/mobileNav.css';
import Fade from 'react-reveal/Fade';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas);


const Layout = () => {
    const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
    return(
        <>   
        
            <button  onClick={handleClick} id="navButtonMobile" class="hamburger">
                     <FontAwesomeIcon className="icon-large" icon="bars" />
            </button>
        
               <Fade top when={show}><div id ="mobileDiv" className='mobileNav'>
                

                <div className='listMobile'>
                    <li>
                        <Link class = "navItems"
                                onClick={() => {
                                                document.querySelector("html").scrollTo(0,0);
                                                }}
                                                to = "/">
                            <div className='navItem cb-paragraph'>Home</div>
                            </Link>
                        </li>

                    <li>
                    <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Services">
                        <div className='navItem cb-paragraph'>Services</div>
                        </Link>
                    </li>

                    <li>
                    <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Drinks">
                        <div className='navItem cb-paragraph'>Drinks</div>
                        </Link>
                    </li>

                    <li>
                    <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Apply">
                        <div className='navItem cb-paragraph'>Apply</div></Link>
                    </li>

                    <li>
                    <Link class = "navItems"
                            onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                            to = "/Visit">
                        <div className='navItem cb-paragraph'>Visit</div>
                        </Link>
                    </li>



                </div>

                </div></Fade> 

            <Outlet/>
        </>
    );
}
function toggle(){ /*mobileNav */
    const nav = document.getElementById('mobileDiv');
    
    if(nav.classList.contains("mobileNav")){
        nav.classList.remove("mobileNav");
        nav.classList.add("show");
        
    }else if(nav.classList.contains("show")){
        nav.classList.remove("show");
        nav.classList.add("mobileNav");
    }

  
}

export default Layout;