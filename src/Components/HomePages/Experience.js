import React, { Component } from 'react';

import '../../Styles/experience.css';

import video from '../../Assets/video.mp4';
import Fade from 'react-reveal/Fade';

class Experience extends Component {
  state = { playButtonVisible: true };

  componentDidMount() {
    const videoElement = document.getElementById('video');
    videoElement.addEventListener('play', () => {
      this.setState({ playButtonVisible: false });
    });
  }

  handleClick = () => {
    const videoElement = document.getElementById('video');
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  render() { 
    return (
      <div id='experience' className='cb-fullPage'>
        <div className='center-container'><p className='fancy-heading'>See the experience</p></div>
        
        <Fade bottom duration = {1500}><div className='center-container'>
          <video
            className="video-thumbnail col-md-12 col-sm-12"
            id="video"
            controls={false}
            onClick={this.handleClick}
          >
            <source src={video} type="video/mp4"></source>
          </video>
          {this.state.playButtonVisible && <div className="play-button" />}
        </div></Fade>

      </div>
    );
  }
}
 
export default Experience;
