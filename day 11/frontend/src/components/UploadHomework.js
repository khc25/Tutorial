import React, { Component } from 'react';
import { Form, Button, Image, ProgressBar } from 'react-bootstrap';

import { storage } from './fbconfig'
import axios from 'axios';
//firebase

class UploadHomework extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: null,
            url: '',
            progress: 0,
        }
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            this.setState({ image })
        }
    }

    handleUpload = () => {
        //ref = change name, put(image)
        
        const uploadTask = storage.ref(`Upload/${this.state.image.name}`).put(this.state.image);
        // storage.ref('Upload').child(this.state.image.name).getDownloadURL().then(url => {
        //     console.log(url);

        //     this.setState({ url });

        //     axios.post('http://localhost:8080/upload', {
        //         url: url,
        //     }).then(res => {
        //         console.log(res);
        //     })

        //not need, just handling the progress, .on handle progress
        uploadTask.on("state_changed", (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({ progress })
        },
            (error) => {
                console.log(error);
            },
            //complete function
            () => {
                storage.ref('Upload').child(this.state.image.name).getDownloadURL().then(url => {
                    console.log(url);

                    this.setState({ url });

                    // axios.post('http://localhost:8080/upload', {
                    //     url: url,
                    // }).then(res => {
                    //     console.log(res);
                    // })
                })
            }
        )
    }

    render() {
        console.log(this.state)
        return (
            <div>
            <Form>
                <Form.Group>
                    
                    <Form.File id="exampleFormControlFile1" label="Example file input" onChange={this.handleChange} />     
                </Form.Group>

                <Button onClick={this.handleUpload}>Upload</Button>
            </Form>
            <ProgressBar now={this.state.progress} />
            <Image style={{width:'100%'}} src={this.state.url} fluid />
            </div>

        )
    }
}

export default UploadHomework;