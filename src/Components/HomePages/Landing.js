import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';
class TitoWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://js.tito.io/v2';
      script.async = true;
      document.head.appendChild(script);
    }
  
    render() {
      return  <tito-button event="sensationsgc/booking">Book with Us</tito-button>;;
    }
  }
class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "home-landing" className='center-container cb-fullpage'>

                <div className='text-center'>
                   <Fade><p className='fancy-heading'>Sensations Gentleman's Club</p></Fade> 
                    <p className='fancy-subheading'>Home of the naked ladies</p>
                   
                   
                    <TitoWidget />
                   
                   
                </div>
            </div>
        );
    }
}
 
export default Landing;