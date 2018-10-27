import React from 'react'
import {NavLink} from 'react-router-dom';
import { Nav } from '../common/StyledComponents';

const TopNav = (props) => {
    const {location:{pathname}} = props;
    return (
        <Nav>
            <NavItems to="/todo" >Todo List</NavItems>
            <NavItems to="/family-tree" >Family Tree</NavItems>
            <NavItems to="/auth">Auth</NavItems>
        </Nav>
    )
}

const NavItems = ({to,children: title}) => (
    <li><NavLink to={to} activeStyle={{background: "rgba(0,0,0,.9)",color:"white"}} >{title}</NavLink></li>
)

export default TopNav;