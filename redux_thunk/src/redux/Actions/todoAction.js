export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO"

let nextTodoId = 0;
export const AddTodoAction = content => {
    return {
        type: ADD_TODO,
        payload: {
            id: ++nextTodoId,
            content: content,
        }
    }
};

export const DeleteTodoAction = id => {
    return {
        type: DELETE_TODO,
        id: id,
    }
}