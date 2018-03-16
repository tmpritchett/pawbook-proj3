import React, { Component } from 'react';
import style from 'styled-components'
import axios from 'axios'
import LandingPage from './LandingPage'
import NavBar from './NavBar'
// import User from './User'
// import LogIn from './LogIn'






class UserPage extends Component {
    render() {
        return (
            <div>
                <LandingPage />
                <NavBar />
            </div>
            
        );
    }
}








export default UserPage;
