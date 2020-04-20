const {createStore} = require('redux');

function todo(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, // Existing todos
                // Adding a new item at the end:
                {
                    id: state.reduce((prev, curr) => curr.id > prev ? curr.id : prev, 0) + 1, // Next id.
                    text: action.text,
                    done: false
                }];
        case 'REMOVE_TODO':
            return [...state].filter(todo => todo.id !== action.id); // Remove by id
        case 'FINISH_TODO': // Map the item with the given id to a version with done == true
            return state.map(todo => todo.id === action.id ? {...todo, done: true} : todo);
        default:
            return state // Do nothing, just return current state as it is
    }
}

let store = createStore(todo);

store.subscribe(() => console.log("Current state:", store.getState()));

store.dispatch({ type: 'ADD_TODO', text: "Learn redux" });
store.dispatch({ type: 'ADD_TODO', text: "Read coding examples" });
store.dispatch({ type: 'ADD_TODO', text: "Implement learnings for greater good" });
store.dispatch({ type: 'FINISH_TODO', id: 2 });
store.dispatch({ type: 'FINISH_TODO', id: 3 });
store.dispatch({ type: 'REMOVE_TODO', id: 1 });
store.dispatch({ type: 'ADD_TODO', text: "Finish this example" });