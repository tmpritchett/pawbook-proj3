import React, { Component } from 'react';
import style from 'styled-components'
import axios from 'axios'
import LandingPage from './components/LandingPage'

class UserPage extends Component {
    render() {
        return (
            <div>
                <LandingPage />
            </div>
        );
    }
}

export default UserPage;
