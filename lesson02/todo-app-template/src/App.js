import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                { text: 'Do laundry', done: false },
                { text: 'Clean bedroom', done: true },
                { text: 'Bake cake', done: true },
                { text: 'Pick up groceries', done: false },
                { text: 'Post letter', done: false }
            ]
        };
    }

    addTask(task) {
        // TODO: Implement add task
    }

    render() {
        return (
            // TODO: Render the list actual list below
            <>
                <h2>Todo List</h2>
                <ul>
                    <li><input type="checkbox"/> Remove this {'<li>'}, and render actual tasks instead</li>
                </ul>
            </>
        );
    }
}

export default App;
