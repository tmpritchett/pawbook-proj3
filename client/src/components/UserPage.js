import React, { Component } from 'react';
import style from 'styled-components'
import axios from 'axios'
import LandingPage from './LandingPage'
import Header from './Header'








class UserPage extends Component {
    render() {
        return (
            <div>
                <LandingPage />
                <Header />
        
            </div>
            
        );
    }
}








export default UserPage;
