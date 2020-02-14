import React, {Component} from 'react';
import {Link} from "@reach/router";

class FruitList extends Component {
    render() {
        return(
            <>
                <h1>Home</h1>
                <ul>
                    {["apples", "bananas", "oranges"].map(fruit =>
                        <li>
                            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
                        </li>)}
                </ul>
            </>
        );
    }
}

export default FruitList;
