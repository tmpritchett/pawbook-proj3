import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import dalmation from '../images/dalmation.jpg'

// const HomePage = styled.div`
// margin: 0;
// padding: 7px;
// height: 10vh;
// background: black;
// overflow: hidden;
// `
// const Image = styled.img `
// margin-left: 3vw;
// height:100%;
// width: auto;
// &:hover{
//     margin-top:5px;
// }
// `
const HomePage = styled.div`

`

const Image = styled.img`
height: auto;
background-repeat: no-repeat;
background-size: cover;
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

