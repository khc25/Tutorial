import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeleteTodoActionThunk, LoadTodoActionThunk } from '../redux/Actions/todoAction'
import { CardColumns } from 'react-bootstrap'

class TodoList extends Component {
    constructor(props) {
        super(props);
        //state from subcomponent
        this.state = {

        }
    }
    //load something before render
    componentDidMount() {
        //load
        this.props.load()
    }
    
    handleDelete = e => {
        const id = e.target.id;
        this.props.delete(id);
    }



    render() {
        console.log(this.props.dataFromReducer)
        const mapping = this.props.dataFromReducer.map(rows => {
            return (
                <div>
                    <div>{rows.content}</div>
                    <button id={rows.id} onClick={this.handleDelete}>delete</button>
                </div>
            )
        })
        return (
            <CardColumns>{mapping}</CardColumns>
        )
    }
}

//state from store
const mapStateToProps = state => {
    //call state from store
    console.log(state);

    //put into props
    return {
        dataFromReducer: state.todoReducer.datas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load:() => dispatch(LoadTodoActionThunk()),
        delete: (id)=> {
            dispatch(DeleteTodoActionThunk(id))
        }
        
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
