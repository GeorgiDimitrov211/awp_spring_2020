import React, {Component} from 'react';
import { Link } from "@reach/router";

class Recipes extends Component {
    render() {
        const mapFunction = elm =>
        <li>
            <Link to={"/recipe/"+elm.id}>{elm.title}</Link>
        </li>;

        const list = this.props.data.map(mapFunction);
        return (
            <>
                <h3>List</h3>
                <ul>
                    {list}
                </ul>
            </>
        );
    }
}

export default Recipes;

