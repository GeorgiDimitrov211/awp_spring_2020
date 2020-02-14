import React, {Component} from 'react';
import Task from './Task';

export default class List extends Component {

    render() {
        let items = [];
        this.props.todoList.forEach((value, index) => {
            items.push(
                <li key={index}><Task task={value} index={index} changeDone={this.props.changeDone}/></li>
            )
        });

        return (
            <>
                <h3>The list</h3>
                <ol>
                    {items}
                </ol>
            </>
        );
    }
}


