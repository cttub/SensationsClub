import React, { Component } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';


import Nav from './NavigationBar';
import '../Styles/home.css';


import Fade from 'react-reveal/Fade';


import Landing from './HomePages/Landing';
import GetToKnow from './HomePages/GetToKnow';
import Why from './HomePages/Why';
import Experience from './HomePages/Experience';
import Work from './HomePages/Work';

import ReactFullpage from '@fullpage/react-fullpage';


const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';




class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 0,
        };
    }
    render() {
        return (
            <div>
                {/* Navbar will only appear when user scrolls past the first section, which first section == index 0*/}
                {/* This section must be greater than 0 AND if the animation is passed into the NavBar*/}
                {this.state.currentSection > 0 && <Nav animationClass={this.state.animationClass} />}  
                <ReactFullpage
                    licenseKey={licenseKey}
                    scrollingSpeed={1000}
                    sectionsColor={['#Landing', 'black', '#Offer', '#Learn']}
                    navigation={true}
                    onLeave={(origin, destination) => {
                        this.setState({ currentSection: destination.index });
                        if (destination.index === 0) {
                            this.setState({ animationClass: '' });
                        } else {
                            this.setState({ animationClass: 'slide-in' });
                        }
                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <Landing />
                                </div>
                                <div className="section">
                                    <GetToKnow />
                                </div>
                                <div className="section">
                                    <Why />
                                </div>
                                <div className="section">
                                    <Experience />
                                </div>
                                <div className="section">
                                    <Work />
                                </div>
                             
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}


export default Home;

