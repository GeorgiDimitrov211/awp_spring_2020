import React, {Component} from 'react';

class ListSum extends Component {
    render() {
        let sum = this.props.numbers.reduce((prev, curr) => prev + curr, 0);
        let list = this.props.numbers.reduce((prev, curr) => `${prev ? `${prev} +` : ""} ${curr}`, "");
        return (
            <p>{list} = {sum}</p>
        );
    }
}
export default ListSum;

