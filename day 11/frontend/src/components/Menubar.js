import React, { Component } from 'react';
import { Navbar, Form, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap';

class MenuBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/upload">Upload Homework</Nav.Link>
                        <Nav.Link href="/registor">Registor</Nav.Link>
                        <Nav.Link href="/getuser">Get User</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MenuBar