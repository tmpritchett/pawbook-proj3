import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import yodaPic from '../images/yoda.jpg'


const ProfilePic = styled.div`
img:url(${yodaPic});
width: 25vw;
height: 25vh;
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