import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

import '../../Styles/why.css';
class Why extends Component {
    state = {  } 
    render() { 
        return (
            <div id='why' className='cb-fullPage'>


                <div className='center-container'><p className='fancy-heading'>Why Choose Sensations</p></div> 
                 
                
                        <div id='circles'>
                           <Fade up duration ={1500}><div className='image-cap col-lg-3 col-md-3 col-sm-12'>
                                <div>
                                    <div id = "private" className = "circle"/>
                                    <p className='cb-paragraph'>Private VIP</p>
                                </div>
                            </div></Fade> 
                            <Fade up duration ={2000}><div className='image-cap col-lg-3 col-md-3 col-sm-12'>
                                <div>
                                <div id = "full" className = "circle"/>
                                    <p className='cb-paragraph'>Full Nude</p>
                                </div>
                            </div></Fade>
                            <Fade up duration ={2500}><div className='image-cap col-lg-3 col-md-3 col-sm-12'>
                                <div>
                                    <div id = "beautiful" className = "circle"/>
                                    <p className='cb-paragraph'>Beautiful Girls</p>
                                </div>
                            </div></Fade>
                        </div>
               

            </div>
        );
    }
}
 
export default Why;