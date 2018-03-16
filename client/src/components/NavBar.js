import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default NavBar;

const NavBar = React.createClass({
    render: function() {
      return (
        <navBar>
    <div className="navWide">
    <div className="wideDiv">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
    </div>
    <div className="navNarrow">
      <i className="fa fa-bars fa-2x"></i>
        <div className="narrowLinks">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
  </div>

        </navBar>
      );
    }
  });