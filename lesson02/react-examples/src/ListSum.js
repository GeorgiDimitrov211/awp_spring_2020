import React, {Component} from 'react';

class ListSum extends Component {
    render() {
        let numbers = this.props.numbers;
        let sum = 0;
        for (let n of numbers) {
            sum += n;
        }
        return (
            <>
                <p>Sum: {sum}</p>
            </>
        );
    }
}
export default ListSum;

