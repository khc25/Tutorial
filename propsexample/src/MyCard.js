import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class MyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={this.props.src} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                 
                </Card.Body>
            </Card>
        )
    }
}

export default MyCard;