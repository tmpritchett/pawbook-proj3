import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import LandingPage from './LandingPage'
import Header from './Header'
import LogIn from './LogIn'
import AutoFitImage from 'react-image-autofit-frame'
import { Link } from 'react-router-dom'
import dogPic from '../images/dalmation.jpg'

const DogBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${dogPic});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`

const Container = styled.div`
display:flex;
flex-direction: column;
height: 100% ;
justify-content: space-between;


`
class UserPage extends Component {
    render() {
        return (
            
            
            <DogBackground>
            <Container>
                <LandingPage />
                <Header />
           </Container>
           </DogBackground>
        );
    }
}

export default UserPage;







