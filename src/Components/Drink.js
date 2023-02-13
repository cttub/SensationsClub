import React, { Component } from 'react';
import Nav from './NavigationBar';
import VisitCard from './VisitCard';

import image from '../Assets/Images/imageTwo.JPG';

import Fade from 'react-reveal/Fade';

import '../Styles/drink.css';
import Footer from './Footer';
class Drinks extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Nav/>
            <div id='drinkMenu'>
                <p className='fancy-heading' style = {{textAlign: "center", paddingTop: "6%"}}>Our Drink Menu</p>

                <div className='menu-container'>



                       <Fade bottom duration = {1500}> <div id = "top-menu" className='glass'>
                               
                                    <div className='fountain-Top' style = {{borderBottom: "solid white 1px"}}>
                                        <p className='fancy-heading'>Fountain Drinks $4</p>
                                    </div>
                                    
                                    <div className='drink-menu'>
                                        <div className='menu inola col-lg-5 col-md-5'>
                                            <p className='fancy-subheading' style = {{border: "white solid 1px"}}>Inola Drinks</p>
                                            <p className='item cb-paragraph col-lg-4'>Coke</p>
                                            <p className='item middleItem cb-paragraph col-lg-4'>Diet Coke</p>
                                            <p className='item cb-paragraph col-lg-4'>Mellow Yellow</p>
                                            <p className='item cb-paragraph col-lg-4'>Sprite</p>
                                            <p className='item middleItem cb-paragraph col-lg-4'>Sweet Tea</p>
                                            <p className='item cb-paragraph col-lg-4'>Bottled Water</p>

                                        </div>
                                        <div className='col-lg-2 col-md-2'></div>
                                        <div className='menu galena col-lg-5 col-md-5'>
                                         <p className='fancy-subheading' style = {{border: "white solid 1px"}}>Galena Drinks</p>
                                         <p className='item cb-paragraph col-lg-4'>Pepsi</p>
                                            <p className='item middleItem cb-paragraph col-lg-4'>Dr. Pepper</p>
                                            <p className='item cb-paragraph col-lg-4'>Mountain Dew</p>
                                            <p className='item cb-paragraph col-lg-4'>Sierra Mist</p>
                                            <p className='item middleItem cb-paragraph col-lg-4'>Cranberry Juice</p>
                                            <p className='item cb-paragraph col-lg-4'>Bottled Water</p>

                                        </div>

                                    </div>
                               
                            </div></Fade>

                            <Fade bottom duration = {1500}><div id ="bottom-menu" style={{marginTop: "20px"}}>
                                <div className='energy glass col-lg-5 col-md-6'>
                                        <p style = {{borderBottom: "solid white 1px", marginBottom: "-10px"}} className='fancy-heading'>Energy Drinks</p>
                                        <p className='cb-paragraph'>Red Bull<span style = {{float: "right"}}>$6</span></p>
                                        <p className='cb-paragraph'>Coffee<span style = {{float: "right"}}>$6</span></p>
                                        <p className='cb-paragraph'>NOS<span style = {{float: "right"}}>$8</span></p>
                                        <p className='cb-paragraph'>Monster<span style = {{float: "right"}}>$8</span></p>
                                </div>

                                <div className='col-lg-2'></div>
                                
                                <div className='cups glass col-lg-5 col-md-6'>
                                    <p style = {{borderBottom: "solid white 1px"}} className='fancy-heading'>Souvenir Cups</p>
                                    <p className='cb-paragraph'>First Purchase<span style = {{float: "right"}}>$15</span></p>
                                    <p className='cb-paragraph'>After Visit Purchase<span style = {{float: "right"}}>$10</span></p>         
                                </div>

                            </div></Fade>

                
                </div>



                        <div id = "cup-info">

                            <div id = "cup-img" className='col-lg-5  hideSmall'></div>
                            <div id = "cup-desc" className='col-lg-7'>
                                <p className='fancy-heading'>What are Souvenir Cups?</p>
                                <p className='cb-paragraph font-size'>Sensations' Souvenir cups are special cups that are available for purchase. Once you have one
                                 of these cups, you can enjoy free refills on any of the fountain drinks that we offer. </p>
                                 <p className='cb-paragraph font-size'>Additionally, these cups also give you the flexibility to fill them up with any drink that is not typically available at the bar. 
                                 This allows you to customize your experience and enjoy a wide variety of drinks while visiting Sensations. </p>
                                 <p className='cb-paragraph font-size'>By owning our cup, you can enjoy reduced pricing on refills during your subsequent visits. Instead of paying the regular price of 
                                 $15, your unlimited refills will only cost $10 when you return with the same cup you purchased during your initial visit.</p>
                            </div>
                        </div>

                        <VisitCard
                        quote = "We can’t wait to serve you"
                        image = {image}
                        />
            <div className='hideSmall'><Footer/></div>
            </div>
            </>
        );
    }
}
 
export default Drinks;