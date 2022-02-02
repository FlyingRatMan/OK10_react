import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from "./todoSlice";
import './style.css';

const TodoList = () => {
    const todoList = useSelector(state => state.todo);
    const dispatch = useDispatch();

    return (
        <div>
            {todoList.map((todo, i) => {
                return (
                    <li key={todo.id} style={{'list-style-type': 'none'}}>
                        <input type="checkbox"
                               onChange={() => dispatch(toggleTodo(i))}/>
                        <span className={todo.isDone? 'checked' : ''}>{todo.todo}</span>
                        <button onClick={() => dispatch(deleteTodo(i))}
                        >Delete
                        </button>
                    </li>
                )
            })}
        </div>
    );
};

export default TodoList;
