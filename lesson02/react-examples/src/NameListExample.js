import React, {Component} from 'react';

class NameListExample extends Component {
    render() {
        let list = [];
        for (let name of this.props.names) {
            list.push(<li>{name}</li>);
        }

        return (
            <>
                <h3>The names</h3>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}

export default NameListExample;

