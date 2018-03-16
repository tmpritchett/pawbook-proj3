import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { injectGlobal } from 'styled-components'
import UserPage from './components/UserPage'
import ProfilePage from './components/ProfilePage'
import PortraitPage from './components/PortraitPage'
import SignIn from './components/SignIn'
import ProfileCss from './components/ProfileCss'
import NavBar from './components/NavBar'
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
            
<NavBar />
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route path="/portraitpage" component={PortraitPage} />
            <Route path= "/signinpage" component={SignIn} />
          </Switch>

        </div>
      </Router>
    )
  }
}


export default App;
