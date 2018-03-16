import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { injectGlobal } from 'styled-components'
import UserPage from './components/UserPage'
import ProfilePage from './components/ProfilePage'
import PortraitPage from './components/PortraitPage'
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/signin'>Sign in</Link>
          </div>

          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/portrait" component={PortraitPage} />
          </Switch>

        </div>
      </Router>
    )
  }
}


export default App;
