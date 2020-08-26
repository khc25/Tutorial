//Wed
import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    handleMsgChange = (e) => {
        this.setState({
            msg: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login',{
          
            email: this.state.email,
            msg: this.state.msg,
        }).then(res => {
            
            const token = res.data
            console.log(token)
            localStorage.setItem('token',token);
            this.props.history.push('/');
        })

    }


    render() {
        console.log(this.state)
        return (
            
            <Form style={FormStyle}>
                <h1>Login</h1>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
                   
                </Form.Group>

                <Form.Group>
                    <Form.Label>MSG</Form.Label>
                    <Form.Control type="text" placeholder="msg" onChange={this.handleMsgChange}/>
                </Form.Group>
               
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>Login</Button>
            </Form>

        )
    }
}

const FormStyle = {
    marginRight: "100px",
    marginLeft: "100px",
}

export default Login;