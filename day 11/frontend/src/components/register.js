import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Registor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }

    }
    // handleNameChange = (e) => {
    //     this.setState({
    //         name: e.target.value,
    //     })

    // }

    handleValidation() {
        const isValid = true;
        if (!this.state.name || !this.state.email || !this.state.msg) {
            isValid = false;
        }

        return isValid
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        if (this.handleValidation) {
            e.preventDefault();
            axios.post('https://briantestserver.herokuapp.com/post', {

                name: this.state.name,
                email: this.state.email,
                msg: this.state.msg,

            }).then((res) => {
                console.log(res)
            })
        } else {
            alert("Cannot be empty")
        }

    }

    render() {
        return (
            <Form style={FormStyle}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" type="input" placeholder="name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Msg</Form.Label>
                    <Form.Control id="msg" type="textarea" placeholder="MSG" onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        )

    }

}

const FormStyle = {
    marginRight: "100px",
    marginLeft: "100px",
}

export default Registor;