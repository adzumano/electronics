import React from 'react';
import {Card, Container, Row} from 'react-bootstrap';

let Cards = (props) => {
    const divStyle = {
        padding : '30px',
        display : 'flex',
        justifyContent : 'space-between',
    };
    const cardStyle = {
        width: '35rem',
    }

    const cards =   [
        'Primary',
        'Primary',
        'Primary',
    ]
    return <Container fluid>
        <Row style={divStyle}>
            {
                cards.map((variant, idx) => <Card bg={variant.toLowerCase()} key={idx} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} style={cardStyle}>
                    
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>{variant} Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </Row>
    </Container>
 
};

export default Cards;

