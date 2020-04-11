import React from 'react';
import {Image} from 'react-bootstrap';
import userImage from '../assets/img/user-name.png';

let UserImage = (props) => {
    let imageRes = {
        width : '4rem'
    }
    return <>
        <Image style={imageRes} src={userImage} thumbnail/>
    </>
};

export default UserImage;

