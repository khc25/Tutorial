import React, { Component } from 'react';
import Axios from 'axios';


class UserDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:{}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        
        Axios.get(`https://briantestserver.herokuapp.com/getOne?id=${id}`).then(res => {
            const data = res.data[0]
            this.setState({
                data
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.state.data.name}</h1>
            </div>
        )

    }
}

export default UserDetails;