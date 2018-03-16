import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import weimaraner from '../images/weimaraner.jpg'

const ProfileStyle = styled.div`
text-align: justify;

`
const Image = styled.img`
height: auto;
background-repeat: no-repeat;
background-size: 50%;
background-position: center;
background-color: #56595C;

`
class ProfileCss extends Component {
    render() {
        return (
           
           
           
    <ProfileStyle>
    <Link to="/"><Image src={weimaraner} alt="weimaraner"/></Link>
    </ProfileStyle>

        );
    }
}

export default ProfileCss
