export const ADD_TODO = "ADD_TODO";

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