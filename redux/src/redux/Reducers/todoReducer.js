import { ADD_TODO } from '../Actions/todoAction';

const initialState = {
    datas:[]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const {id, content } = action.payload;
            return {
                ...state,
                datas:[...state.datas, {id, content}]
            }
        }
        default:
            return state;
    }

}