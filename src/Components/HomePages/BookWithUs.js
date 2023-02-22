import React, { Component } from 'react';
import '../../Styles/tito.css';
import Footer from '../Footer';
import picture from '../../Assets/Images/book.JPG';
import Fade from 'react-reveal/Fade';
class TitoWidget extends Component {
    componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://js.tito.io/v2';
      script.async = true;
      document.head.appendChild(script);
    }
  
    render() {
      return  <tito-button event="sensationsgc/booking">Reserve Now</tito-button>;;
    }
  }
class BookWithUs extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='book'>
                    <Fade><div className='center-container'><p className='fancy-heading' style = {{textAlign: "center"}} style = {{marginBottom: "0px"}}>Book with Us</p></div></Fade>
                    <p className='cb-paragraph' style = {{textAlign: "center"}}>An exclusive experience waiting for you</p>
                    <div className = "bookWithUs center-container">
                        <Fade duration = {2000}><div id = "titoStyling" style = {{textAlign: "center"}} className = "col-lg-5"><TitoWidget /></div></Fade>
                    </div>
                    
                </div>
                <div className='hideSmall'><Footer/></div>
            </div>
        );
    }
}
 
export default BookWithUs;