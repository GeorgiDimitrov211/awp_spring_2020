import React, {Component} from 'react';

class NumbersSum extends Component {
    render() {
        let list = [];
        for (let n of this.props.numbers) {
            list.push(<li>{n}</li>);
        }

        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default NumbersSum;

