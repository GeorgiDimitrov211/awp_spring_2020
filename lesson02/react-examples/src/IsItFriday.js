import React, {Component} from 'react';

class IsItFriday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friday: (new Date()).getDay() === 5
        };
    }

    render() {
        let content = <p>It is not friday</p>;
        if (this.state.friday) {
            content = <p>It is friday</p>;
        }
        return (
            <>
                {content}
            </>
        );
    }
}

export default IsItFriday;