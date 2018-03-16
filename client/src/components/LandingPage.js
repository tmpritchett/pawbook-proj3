import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import dalmation from '../images/dalmation.jpg'

const HomePage = styled.div`

`

const Image = styled.img`
height: auto;
background-repeat: no-repeat;
background-size: 50%;
background-position: center;

`
class LandingPage extends Component {

    render() {
        
        return (
            <HomePage>
            <Link to="/"><Image src={dalmation} alt="dalmation"/></Link>
            </HomePage>
        )
    }

}



export default LandingPage

