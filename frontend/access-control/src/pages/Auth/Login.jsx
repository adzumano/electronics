import React from 'react';
import {Button} from 'react-bootstrap';
import LoginModal from '../../components/LoginModal';

let Login = (props) => {
    let loginStyle = {
        color : '#fff',
        fontSize : '20px',
        border : '2px solid #fff',
        borderRadius : '6px',
        width : '6rem',
        textAlign : 'center',
        verticalAlign : 'middle',
        textDecoration : 'none',
        margin: '0 20px 0 0',
        lineHeight: '50px'
    }
    const [modalShow, setModalShow] = React.useState(false);
    return <>
        <Button variant="primary" onClick={() => setModalShow(true)} style={loginStyle}>
            Login
        </Button>

        <LoginModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
};

export default Login;