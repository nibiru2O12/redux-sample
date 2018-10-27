import React from 'react'
import {NavLink} from 'react-router-dom';
import { Nav } from '../common/StyledComponents';

const TopNav = (props) => {
    const {location:{pathname}} = props;
    return (
        <Nav>
            <NavItems to="/todo" pathname={pathname} >Todo List</NavItems>
            <NavItems to="/family-tree" pathname={pathname}  >Family Tree</NavItems>
            <NavItems to="/auth" pathname={pathname} >Auth</NavItems>
        </Nav>
    )
}

const NavItems = ({to,children: title,pathname}) => {
    const isActive = to === pathname;
    const style = isActive ? {background: "rgba(0,0,0,.9)",color:"white"} : {}
    return <li><NavLink to={to} style={style} >{title}</NavLink></li>
}

export default TopNav;