import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const styles = {
    navLink : {
        color : '#0275d8',
        fontWeight : 'normal',
        fontSize : '24px',
        paddingRight : '80px',
        textDecoration : 'none',
    }
}

let HeaderLinks = (props) => {
    return <>
        <NavLink to="/device" style={styles.navLink}>Device</NavLink>
        <NavLink to="/personal"style={styles.navLink}>Personal</NavLink>
        <NavLink to="/attendance" style={styles.navLink}>Attendance</NavLink>
        <NavLink to="/accessControl" style={styles.navLink}>Access Control</NavLink>
        <NavLink to="/system" style={styles.navLink}>System</NavLink>
    </>
};

export default HeaderLinks;

