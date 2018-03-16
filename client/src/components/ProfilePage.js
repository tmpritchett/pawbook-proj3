import React, { Component } from 'react';
import style from 'styled-components'
import axios from 'axios'
import ProfileCss from './ProfileCss'

class ProfilePage extends Component {
    render() {
        return (
            
            <div>
            <div>
                <h1>Welcome to PAWBOOK </h1>
            </div>
            <div>
                <ProfileCss />
            </div>

            </div>
        )
    }
}

export default ProfilePage

