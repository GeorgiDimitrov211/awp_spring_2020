const {createStore} = require('redux');
const {bankReducer} = require('./bank_reducer');

const store = createStore(bankReducer);
store.subscribe(() => console.log("Current state:", store.getState()));

store.dispatch({ type: "DEPOSIT", amount: 1000});
store.dispatch({ type: "DEPOSIT", amount: 2000});
store.dispatch({ type: "DEPOSIT", amount: 3000});
store.dispatch({ type: "WITHDRAW", amount: 5000});