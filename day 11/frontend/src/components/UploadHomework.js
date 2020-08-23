import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

//firebase

class UploadHomework extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
            </Form>

        )
    }
}

export default UploadHomework;