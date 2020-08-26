import React, { Component } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import { Form , Button} from 'react-bootstrap'


class UserDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        
        axios.get(`https://briantestserver.herokuapp.com/getOne?id=${id}`).then(res => {
            // const data = res.data[0]
            const id = res.data[0].id
            const name = res.data[0].name
            const email = res.data[0].email
            const msg = res.data[0].msg
            this.setState({
                id, name, email, msg
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.props)
    }

    handleSubmit = (e) => {
        
            e.preventDefault();
            axios.put('https://briantestserver.herokuapp.com/change', {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                msg: this.state.msg,

            }).then((res) => {
                console.log(res);
                alert("Success");
            }).catch((err) => {
                console.log(err);
                alert("Error")
            })

    }

    render() {
        console.log(this.state)
        return (
            <Form style={FormStyle}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name" type="input" defaultValue={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="email" type="email"  defaultValue={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Msg</Form.Label>
                    <Form.Control id="msg" type="textarea"  defaultValue={this.state.msg} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="primary" onClick={this.handleSubmit}>
                    Change info
                </Button>
            </Form>
        )

    }
}

const FormStyle = {
    marginRight: "100px",
    marginLeft: "100px",
}

export default UserDetails;