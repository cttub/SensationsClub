import React, { Component } from 'react';
import logo from '../Assets/logo.png';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "footer" className='darkRed-bg'>
                <div>
                    <img className = "col-lg-6 col-md-6" src = {logo}></img>
                </div>
               
                        <div id = "sensations-webs" className='fancy-small col-lg-2 col-md-2'>
                            <p className='fancy-small'>Sensations Gentleman's Club</p>
                            <p className='fancy-small'>https://www.sensationsgc.club/</p>
                        </div>
                        <div className='col-lg-2 col-md-2'>
                            <p className='fancy-small'>Inola OK</p>
                            <p href="tel:9185433488" className='cb-small-text'>(918) 543-3488</p>
                            <p className='cb-small-text'>9373 S 4250 Rd, Inola, OK 74036</p>
                        </div>
                        <div className='col-lg-2 col-md-2'>
                            <p className='fancy-small'>Galena, KS</p>
                            <p href="tel:6208563757" className='cb-small-text'>(620) 856-3757</p>
                            <p className='cb-small-text'>11491 Southeast Hwy 166, Galena, KS 66739</p>
                        </div>
                </div>
           
        );
    }
}
 
export default Footer;