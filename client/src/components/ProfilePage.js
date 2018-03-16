import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import ProfileCss from './ProfileCss'
import { Link } from 'react-router-dom'
import dogPic from '../images/weimaraner.jpg'


const DogBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${dogPic});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
`


class ProfilePage extends Component {
    state ={
        users: []
    }

    getAllUsers = () => {

        axios.get ('/api/users').then(res => {
            this.setState ({users: res.data})
        })
    }
    render() {
        return (
            <div>
            <DogBackground>
            <div>
                <h1>Welcome to PAWBOOK </h1>
            </div>
            <div>
            <h3> Please Select A User</h3>
            {this.state.users.map(user=> {
                return (<Link to={`/user/${user._id}`} > {user.userName}</Link>)
            })}
            </div>

            </DogBackground>
            </div>
        )
    }
}

export default ProfilePage


