const {createStore} = require('redux');
const store = createStore(counter_reducer);
store.subscribe(() => console.log("Current state:", store.getState()));

// The reducer function
function counter_reducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state
    }
}
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });