import {useDispatch} from "react-redux";
import {useRef} from "react";

import {addTodo} from "./todoSlice";

const Form = () => {
    const dispatch = useDispatch();
    const todoInput = useRef(null);

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(todoInput.current.value));
                todoInput.current.value = '';
            }}>
                <input type="text"
                       ref={todoInput}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
