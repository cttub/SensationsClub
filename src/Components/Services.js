import React, { Component } from 'react';
import Nav from './NavigationBar';


import '../Styles/services.css';

import ServiceItems from './Services/ServiceItems';
import Information from './Services/Information';
class Services extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Nav/>
            <ServiceItems/>

            <div id='s-info'>
                 <Information/>
            </div>
            </>
        );
    }
}
 
export default Services;