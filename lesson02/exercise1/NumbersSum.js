import React, {Component} from 'react';

class NumbersSum extends Component {
    render() {
        let sum = this.props.numbers.reduce(
            (prev, curr) => prev + curr, 0);

        let sum2 = 0;
        for (let n of this.props.numbers) {
            sum2 += n;
        }

        return (
            <>
                <p>Sum: {sum}</p>
                <p>Sum: {sum2}</p>
            </>
        );
    }
}

export default NumbersSum;

