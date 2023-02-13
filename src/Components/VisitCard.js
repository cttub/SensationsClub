import React from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';

class VisitCard extends React.Component {
    state = {  
    } 
    render() { 
       
        return (
            
            <div id = "fullCard" style={{ display: "flex", marginTop: "10%",  paddingBottom: "10%" }}>
                    

                    <div id = "quote-box" className='col-lg-6' style ={{ margin: "auto",textAlign: "center", padding: "60px" }}>
                         <hr/>

                                <div style ={{ padding: "60px" }}>
                                          <Fade up duration = {1500}><p className='cb-paragraph'>{this.props.quote}</p></Fade>  


                                            <Link 
                                                onClick={() => {
                                                                document.querySelector("html").scrollTo(0,0);
                                                                }}
                                                                to = "/Visit">
                                            <button>Visit Us</button>
                                            </Link>
                                </div>
                         <hr/>
                    </div>

                    <Fade right duration = {2000}>
                        <div className='image col-lg-6 hideMedium hideSmall' style={{ height: "40vh"}}>
                            <img src = {this.props.image} style={{ objectFit: "cover", width: "100%", height: "100%",}}></img>
                        </div>
                    </Fade>

                  
      
                
            </div>
        );
    }
}

 
export default VisitCard;