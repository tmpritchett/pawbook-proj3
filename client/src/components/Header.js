import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import PawBook_Logo from '../images/PawBook_Logo.jpg'


const HeaderTop = styled.div `
  margin: 0;
  padding: 7px;
  height: 10vh;
  background: gray;
  color: white;
  overflow:hidden;
`
const Image = styled.img `
margin-left: 25px;
height:100%;
width: auto;
&:hover{
    margin-top:5px;
}
`

class Header extends Component {

    render() {
        
        return (
            <HeaderTop>
             <Link to="/"><Image src={PawBook_Logo} alt="pawbook"/></Link>
            </HeaderTop>
        )
    }

}





export default Header;