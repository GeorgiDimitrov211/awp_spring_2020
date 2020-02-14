import React, {Component} from 'react';
import './app.css';
import List from './List'
import AddTask from "./AddTask";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                { text: 'Do laundry', done: false },
                { text: 'Clean bedroom', done: true },
                { text: 'Bake cake', done: true },
                { text: 'Pick up groceries', done: false },
                { text: 'Post letter', done: false }
            ]
        };
    }

    addTask(task) {
        // This is the task object that will be saved to the list
        const taskObject = {
            text: task,
            done: false
        };

        // Set a new state object with a new list of tasks
        this.setState({
            // The new todoList contains all the old items + the new taskObject (...spread syntax)
            // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            todoList: [...this.state.todoList, taskObject]
        });
    }

    changeDone(index) {
        // Make a copy of this.state.todoList as newList (spread syntax)
        const newList = [...this.state.todoList];
        // Find the item and reverse "done"
        newList[index].done = !newList[index].done;
        // Set state to the new copy of the list
        this.setState({
            todoList: newList
        })
    }

    render() {
        return (
            <div className="contents">
                <div className="element">
                    <h1>Todo List</h1>
                    <List todoList={this.state.todoList} changeDone={index => this.changeDone(index)}/>
                    <AddTask addTask={(task) => this.addTask(task)}/>
                </div>
            </div>
        );
    }
}

export default App;
