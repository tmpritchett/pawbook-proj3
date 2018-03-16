import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import PAWBOOKLOGO from '../images/PAWBOOKLOGO.png'

const HeaderTop = styled.div `
  margin: 0;
  padding: 7px;
  height: 10vh;
  background: gray;
  color: white;
  overflow:hidden; 
}
`
const Image = styled.img `
margin-left: 3vw;
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
             <Link to="/"><Image src={PAWBOOKLOGO} alt="pawbook"/></Link>
            </HeaderTop>
        )
    }

}





export default Header;
