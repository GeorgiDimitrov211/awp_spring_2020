const {createStore} = require('redux');
const {reducer} = require('./qa_reducer');

const store = createStore(reducer);
store.subscribe(() => {
    store.getState().forEach(o => console.log(o));
    console.log("*******");
});

// TODO: dispatch some actions to demonstrate that this app works!