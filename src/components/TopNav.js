import React from 'react'
import {NavLink} from 'react-router-dom';
import { Nav } from '../common/StyledComponents';

const TopNav = () => {
    return (
        <Nav>
            <NavItems to="/todo">Todo List</NavItems>
            <NavItems to="/family-tree" >Family Tree</NavItems>
            <NavItems to="/auth">Auth</NavItems>
        </Nav>
    )
}

const NavItems = props => (
    <li><NavLink to='/todo'>Todo List</NavLink></li>
)

export default TopNav;