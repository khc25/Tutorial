import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardColumns,Button } from 'react-bootstrap'


class GetUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        axios.get('https://briantestserver.herokuapp.com/').then(res => {
            console.log(res.data);
            const data = res.data
            this.setState({ data });
        })

    }

    RedirectToDatail = (e) => {
       const id = e.target.id
       this.props.history.push('user/' + id)
    }

    handleDelete = (e) => {
        const id = e.target.id
        axios.delete(`https://briantestserver.herokuapp.com/delete?id=${id}`).then(res => {
            console.log(res)
            if(res.status == 200) {
                window.location.reload(false);
            }    
        })
        const data = this.state.data.filter(i => i.id !== id)
         this.setState({
            data:data
        })

        console.log(this.state.data)
        
    }


    render() {

        const mapping = this.state.data.map((result) => {
            return (
                <Card style={{ width: '100%' }} >
                    <Card.Body>
                        <Card.Title>{result.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{result.email}</Card.Subtitle>
                        <Card.Text>{result.msg}</Card.Text>
                    </Card.Body>
                    <Button id={result.id} onClick={this.RedirectToDatail}>Click</Button>

                    <Button id={result.id} onClick={this.handleDelete} variant="danger">Delete</Button>
                </Card>
            )
        })


        return (
            <div>
                <CardColumns>{mapping}</CardColumns>        
            </div>

        )
    }
}

export default GetUser;