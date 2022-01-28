import {useReducer} from 'react';

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'cats':
            state.cats.push(action.payload);
            return {...state};
        case 'removeCat':
            return {...state};
        case  'dogs':
            state.dogs.push(action.payload);
            return {...state};
        case 'removeDog':
            return {...state};
        default:
            return {...state};
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <>
            <div className='form'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({type: 'cats', payload: e.target[0].value});
                    e.target[0].value = '';
                }}>
                    <input type="text"
                           name={'cat'}/>
                    <button>Add Cat</button>
                </form>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({type: 'dogs', payload: e.target[0].value});
                    e.target[0].value = '';
                }}>
                    <input type="text"
                           name={'dog'}/>
                    <button>Add Dog</button>
                </form>
            </div>

            <div className='animals'>
                <div>
                    {state.cats.map((cat, i) => {
                        return <div key={i} className='animals-cat'>
                            <div>{cat}</div>
                            <button onClick={() => {
                                state.cats.splice(i, 1);
                                dispatch({type: 'removeCat', payload: i})
                            }}>
                                Delete
                            </button>
                        </div>
                    })}
                </div>
                <div>
                    {state.dogs.map((dog, i) => {
                        return <div key={i} className='animals-dog'>
                            <div>{dog}</div>
                            <button onClick={() => {
                                state.dogs.splice(i, 1);
                                dispatch({type: 'removeDog', payload: i})
                            }}>
                                Delete
                            </button>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
