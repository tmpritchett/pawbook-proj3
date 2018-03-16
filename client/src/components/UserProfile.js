import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import yodaPic from '../images/yoda.jpg'


const ProfilePic = styled.div`
width: 100vw;
    height: 100vh;
    background-image: url(${yodaPic});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    `



class UserProfile extends Component {
    render() {
        return (
            
            <ProfilePic>
            <div>
                <h1> Yoda Jedi I Am </h1>
            </div>

            </ProfilePic>
        );
    }
}

export default UserProfile;
