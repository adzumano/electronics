import React from 'react';
import {Image} from 'react-bootstrap';
import headerLogo from '../assets/img/sdu.png';
import { NavLink } from 'react-router-dom';

let HeaderLogo = (props) => {
    let imageRes = {
        width : '8rem'
    }
    return <>
        <NavLink to="/"><Image style={imageRes} src={headerLogo} rounded /></NavLink>
    </>
};

export default HeaderLogo;

