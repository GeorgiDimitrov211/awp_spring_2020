const {bankReducer} = require('./bank_reducer');

it('can deposit 2000', () => {
    const state = bankReducer({amount: 0}, {type: "DEPOSIT", amount: 2000});
    expect(state.amount).toBe(2000);
});

it('can withdraw 1000', () => {
    const state = bankReducer({amount: 3000}, {type: "WITHDRAW", amount: 1000});
    expect(state.amount).toBe(2000);
});

it('has amount 0 in its initial state', () => {
    const state = bankReducer(undefined, {type: "DEPOSIT", amount: 500});
    expect(state.amount).toBe(500);
});

it("doesn't do overdrafts", () => {
    const state = bankReducer({amount: 1000}, {type: "WITHDRAW", amount: 2000});
    expect(state.amount).toBe(1000);
});

it("doesn't let you withdraw negative amount", () => {
    const state = bankReducer({amount: 1000}, {type: "WITHDRAW", amount: -2000});
    expect(state.amount).toBe(1000);
});

it("doesn't let you deposit negative amount", () => {
    const state = bankReducer({amount: 1000}, {type: "DEPOSIT", amount: -2000});
    expect(state.amount).toBe(1000);
});

it("doesn't reuse state object", () => {
    const originalState = {amount: 1000};
    const state = bankReducer(originalState, {type: "DEPOSIT", amount: 2000});
    expect(state).not.toBe(originalState);
});



