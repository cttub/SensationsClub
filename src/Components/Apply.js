import React, { Component } from 'react';
import Nav from './NavigationBar';
import RGF from 'react-google-forms'
import Footer from '../Components/Footer';
class Apply extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Nav/>
            <div className = "MainForm" id = 'form'>
            
            <div id="ff-compose"></div>
            <script async defer src="https://formfacade.com/include/102368871124872976069/form/1FAIpQLSfo_1qAYam4oXeQxTAyJurj_NtsjAUQOY8VvqteQh30gOOMxg/clean.js?div=ff-compose"></script>
            </div>
            <div className='hideSmall'><Footer/></div>
            </>
        );
    }  
    
    componentDidMount(){
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/102368871124872976069/form/1FAIpQLSfo_1qAYam4oXeQxTAyJurj_NtsjAUQOY8VvqteQh30gOOMxg/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }

    
    
}

 
export default Apply;