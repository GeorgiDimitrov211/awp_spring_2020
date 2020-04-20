const {reducer} = require('./qa_reducer');

it('can post a question', () => {
    const state = reducer(undefined, { type: 'ASK_QUESTION', text: "Does it work?" });
    expect(state.length).toBe(1);
});

it('can post several questions', () => {
    let state = reducer(undefined, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });
    expect(state.length).toBe(3);
});

it('stores question text correctly', () => {
    const text = "Does it work?";
    const state = reducer(undefined, { type: 'ASK_QUESTION', text: text });
    expect(state[0].text).toBe(text);
});

it('can post answers', () => {
    let state = reducer(undefined, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ADD_ANSWER', answer: "Maybe...", id: 1 });
    state = reducer(state, { type: 'ADD_ANSWER', answer: "Maybe...", id: 1 });
    expect(state[0].answers.length).toBe(2);
});

it('can store answer text correctly', () => {
    const answer = "Maybe...";
    let state = reducer(undefined, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ADD_ANSWER', answer: answer, id: 1 });
    expect(state[0].answers[0].text).toBe(answer);
});

it('can upvote an answer correctly', () => {
    let state = reducer(undefined, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ADD_ANSWER', answer: "Maybe...", id: 1 });
    state = reducer(state, { type: 'UPVOTE_ANSWER', id: 1, index: 0 });
    state = reducer(state, { type: 'UPVOTE_ANSWER', id: 1, index: 0 });
    state = reducer(state, { type: 'UPVOTE_ANSWER', id: 1, index: 0 });
    expect(state[0].answers[0].votes).toBe(3);
});

it("doesn't duplicate ids on questions", () => {
    let state = reducer(undefined, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });
    state = reducer(state, { type: 'ASK_QUESTION', text: "Does it work?" });

    let questionsWithSameId = state.reduce((acc, curr, index, array) =>
        array.findIndex(q => q.id === curr.id) !== index && !acc.includes(curr) ? [...acc, curr] : acc
    , []);
    console.log(state);

    expect(questionsWithSameId.length).toBe(0);
});


