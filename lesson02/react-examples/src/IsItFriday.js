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
        /*
            Alternative:
            <>
                {this.state.today ? <p>It is friday.</p> : <p>It is not friday.</p>}
            </>
         */
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default IsItFriday;