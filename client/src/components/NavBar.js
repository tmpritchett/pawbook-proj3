import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'

const NavBarBox = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 6px;
  background: black;
  color: white;
`

export default class Navbar extends Component {
  render() {
    return (<NavBarBox>
      <h1>PAWBOOK</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profilepage">See Users</Link>
        </li>
        <li>
          <Link to="/portraitpage">My Portraits</Link>
        </li>
      </ul>
    </NavBarBox>)
  }
}
