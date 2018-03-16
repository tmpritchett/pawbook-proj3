import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import ProfilePage from './ProfilePage'

export default class User extends Component {
    state = {
      name: ''
    }
  
    handleChange = (event) => {
      const newState = {
        ...this.state
      }
      newState[event.target.name] = event.target.value
      this.setState(newState)
    }
  
    saveNewUser = (event) => {
      event.preventDefault()
      this.state.createNewUser
      this.setState({name: ''})
    }
  
    render() {
      return (<div>
        <h1>Join PAWBOOK!!</h1>
        <form onSubmit={this.saveNewUser}>
  
          <label htmlFor="name">User Name</label>
  
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
  
          <button type="Link">
            <Link to="/ProfilePage" className="PAWBOOK Profile">Sign In!
            </Link>
          </button>
        </form>
      </div>)
    }
  }

 

