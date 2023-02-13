import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import VisitCard from '../VisitCard';
import image from '../../Assets/Images/see_you.JPG';
import Footer from '../Footer';

class Information extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "service-info" className='cb-fullpage'>
                
                <div>
                    <p className='cb-small-text'>Note: We have a no refund policy on our fees and services.</p>
                    <hr/>
                </div>

             
                    <div id = "gf-info">
                        <Fade left duration = {1500}><div id = "gf-img" className='col-lg-6'></div></Fade>
            
                        <div id = "gf-desc" className='col-lg-8'>
                            <p className='fancy-subheading'>What is GF Experience?</p>
                            <p className='cb-paragraph font-size'>The GF Experience is a special package offered by our club that allows clients to relax and have 
                            a good time with our girls in a comfortable and casual setting. </p>
                            <p className='cb-paragraph font-size'>The experience is tailored to provide a range of options to suit different preferences. 
                            Clients can choose to watch their favorite shows or movies, engage in some fun and competitive Xbox gaming, or simply 
                            engage in one-on-one conversations with our girls. The goal is to provide a fun and enjoyable experience for our clients and create 
                            an opportunity for them to connect with our girls in a more personal and engaging way.</p>
                        </div>
                    </div>

                    <VisitCard
                    quote = "Our girls can’t wait to see you soon"
                    image={image}
                    />

                    
            <div className='hideSmall'><Footer/></div>
               

           
              

            </div>
        );
    }
}
 
export default Information;