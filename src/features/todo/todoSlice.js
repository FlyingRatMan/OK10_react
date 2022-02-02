import {createSlice, nanoid} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: nanoid(),
                todo: action.payload,
                isDone: false
            })
        },
        toggleTodo: (state, action) => {
            state[action.payload].isDone = !state[action.payload].isDone;
        },
        deleteTodo: (state, action) => {
            state.splice(action.payload, 1);
        },
    }
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;