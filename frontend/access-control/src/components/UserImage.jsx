import React from 'react';
import {Image} from 'react-bootstrap';
import userImage from '../assets/img/user-name.png';
import {NavLink} from 'react-router-dom';

let UserImage = (props) => {
    let imageRes = {
        width : '4rem'
    }
    return <>
        <NavLink to="/profile">
            <Image style={imageRes} src={userImage} thumbnail/>
        </NavLink>
    </>
};

export default UserImage;

