import React, {Component} from 'react';

// This component renders some stuff given to it as part of the route
class ShowStuff extends Component {
    render() {
        return(
            // The value of 'this.props.name' below contains the value from the route parameter ':name'
            <>
                <h1>Show some stuff</h1>
                <p>Name of the stuff is: {this.props.name}</p>
            </>
        );
    }
}

export default ShowStuff;
