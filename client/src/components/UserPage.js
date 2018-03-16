import React, { Component } from 'react';
import style from 'styled-components'
import axios from 'axios'
import LandingPage from './LandingPage'
import Header from './Header'
import User from './User'
import LogIn from './LogIn'
import {Link} from 'react-router-dom'



class UserPage extends Component {
    render() {
        return (
            <div>
                <LandingPage />
                <Header />
                <User />
                <LogIn />
        
            </div>
            
        );
    }
}








export default UserPage;
