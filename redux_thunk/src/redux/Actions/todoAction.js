import axios from 'axios'

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO"
export const LOAD_TODO = "LOAD_TODO"




let nextTodoId = 0;
//action to store
export const AddTodoAction = content => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoId++,
            content: content,
        }
    }
};

//send request to server and send action
export const AddTodoActionThunk = content => {
    return (dispatch) => {
        axios.post(`http://localhost:8080`, { content: content }).then(res => {
            console.log(res);
            dispatch(AddTodoAction(content))
        })
    }
}



export const DeleteTodoAction = id => {
    return {
        type: DELETE_TODO,
        id: id,
    }
}

export const DeleteTodoActionThunk = id => {
    return (dispatch) => {
        axios.delete(`http://localhost:8080/?id=${id}`,
            {
                id: id
            }).then(res => {
                console.log(res);
                dispatch(DeleteTodoAction(id));
            })
    }
}


export const LoadTodoAction = (load_data) => {
    return {
        type: LOAD_TODO,
        load_data: load_data
    }
}

export const LoadTodoActionThunk = () => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/`).then(res => {
            console.log(res);
            const load_data = res.data

            // nextTodoId = load_data[load_data.length - 1].id
            // send data from server to action -> reducer -> store
            dispatch(LoadTodoAction(load_data))
        })
    }
}

