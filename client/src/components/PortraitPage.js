import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'
import dogPic from '../images/rottweiler.jpg'


const DogImage = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${dogPic});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    `

class PortraitPage extends Component {
    render() {
        return (
            <DogImage>
            <div>
                <h1> Portraits </h1>
            </div>
            </DogImage>
        );
    }
}

export default PortraitPage;

