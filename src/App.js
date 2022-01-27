import './App.css';

import {useReducer} from 'react';

const initialState = [0, 0, 0];

function reducer(state, action) {

    switch (action.type) {
        case 'increment':
            state[action.payload] += 1;
            return [...state];
        case 'decrement':
            state[action.payload] -= 1;
            return [...state];
        case 'reset' :
            state[action.payload] = 0;
            return [...state];
        default:
            throw new Error('Something went wrong!')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            {state.map((count, i) => {
                return <div key={i}>
                    {count}
                    <button onClick={() => dispatch({type: 'increment', payload: i})}>Increment</button>
                    <button onClick={() => dispatch({type: 'decrement', payload: i})}>Decrement</button>
                    <button onClick={() => dispatch({type: 'reset', payload: i})}>Reset</button>
                </div>
            })}
        </>
    )
        ;
}

export default App;