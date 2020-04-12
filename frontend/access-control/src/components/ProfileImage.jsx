import React from 'react';
import {Image} from 'react-bootstrap';
import userImage from '../assets/img/user-name.png';


let ProfileImage = (props) => {
    let imageRes = {
        width : '15rem',
    }
    return <>
        <Image style={imageRes} src={userImage} thumbnail/>
    </>
};

export default ProfileImage;

