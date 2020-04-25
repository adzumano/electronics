import React from 'react';
import aa from '../assets/img/Ring-Preloader.gif'

let Preloader = (props) => {
    return <>
        <div style={{display : 'flex', justifyContent : 'center'}}>
            <img src={aa}></img>
        </div>
    </>
};

export default Preloader;