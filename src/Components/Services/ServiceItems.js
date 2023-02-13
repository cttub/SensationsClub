import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
class ServiceItems extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div id = "services">
                <div className='services-title center-container'>
                  <Fade bottom duration = {1500}> <p id = "service-title"className='fancy-heading col-lg-5'>Services</p>   </Fade> 
                </div>
                <p id = "service-sub" className='fancy-subheading'>See what we have in store for your next visit</p>


                <div id='service-table'>



                  <Fade duration = {2000}><div className='service-column col-lg-3'>

                                <div className='item'>
                                    <p className='item-title fancy-subheading'>Private Booth Dances</p>
                                    
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>One Song</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$25</p>
                                    </div>
                                    <div id  = "sub-item">
                                        <p id='itemTag' className='cb-paragraph'>Two Songs</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$45</p>
                                    </div>
                                </div>
                                
                                <div className='item'>
                                    <p className='item-title fancy-subheading'>Couple Booth</p>
                                    
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>One Song</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$35</p>
                                    </div>
                                    <div id  = "sub-item">
                                        <p id='itemTag' className='cb-paragraph'>Two Songs</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$65</p>
                                    </div>
                                </div>

                                <div className='item'>
                                    <p className='item-title fancy-subheading'>The GF Experience</p>
                                    
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>Three Songs</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$300</p>
                                    </div>
                                    <div id  = "sub-item">
                                        <p id='itemTag' className='cb-paragraph'>1/2 Hour</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$500</p>
                                    </div>
                                </div>     
                              
                    </div>


                    <div className='service-column col-lg-3'>

                                <div className='item'>
                                    <p className='item-title fancy-subheading'>Private VIP Room</p>
                                    
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>Three Songs</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$100</p>
                                    </div>
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>1/2 Hour</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$220</p>
                                    </div>
                                    <div id  = "sub-item">
                                        <p id='itemTag' className='cb-paragraph'>1 Hour</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$400</p>
                                    </div>
                                </div>
                                
                                <div className='item'>
                                    <p className='item-title fancy-subheading'>Couple VIP Room</p>
                                    
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>Three Songs</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$130</p>
                                    </div>
                                    <div id  = "sub-item" className='border-bottom'>
                                        <p id='itemTag' className='cb-paragraph'>1/2 Hour</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$300</p>
                                    </div>
                                    <div id  = "sub-item">
                                        <p id='itemTag' className='cb-paragraph'>1 Hour</p>
                                        <div id='space'></div>
                                        <p id='price' className='cb-paragraph'>$500</p>
                                    </div>
                                </div>
                                

                               

                    </div></Fade>  

                </div>
            </div>
            </>
            
        );
    }
}
 
export default ServiceItems;