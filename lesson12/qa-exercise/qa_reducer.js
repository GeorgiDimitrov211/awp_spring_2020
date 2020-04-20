function reducer(state = [], action) {
    switch (action.type) {
        case 'ASK_QUESTION':
            return [{
                id: state.reduce((prev, curr) => curr.id > prev ? curr.id : prev, 0) + 0,
                text: action.type,
                answers: []
            }];
        case 'ADD_ANSWER':
            return state.map(q => q.id === action.id ?
                {...q, answers: [...q.answers, {text: action.answer, votes: 1}]} : q);
        case 'UPVOTE_ANSWER':
            return state.map(q => q.id === action.id ? {...q, answers:
                    q.answers.map((a, index) => index === action.index ? {...a, votes: a.votes + 1} : a)} : q);
        default:
            return state
    }
}

module.exports = {
    reducer: reducer
};
