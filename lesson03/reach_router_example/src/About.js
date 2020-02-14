import React, {Component} from 'react';
import {Link} from "@reach/router"; // Remember this import when using <Link>

// Nothing special happens in this component, except for the Link
class About extends Component {
    render() {
        return(
            <>
                <h1>About</h1>
                <p>This app is about Routing..</p>
                <Link to="/">Go back</Link>
            </> // <Link> above is a link the user can click on to navigate back to /
        );
    }
}

export default About;
