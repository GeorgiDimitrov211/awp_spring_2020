import React, {Component} from 'react';
import { Link } from "@reach/router";

class Recipes extends Component {
    render() {
        const filter = this.props.filter;

        const mapFunction = elm =>
        <li key={elm.id}>
            <Link to={"/recipe/"+elm.id}>{elm.title}</Link>
        </li>;

        let recipes = this.props.data;
        if (filter) {
            recipes = recipes.filter(recipe => recipe.ingredients.includes(filter));
        }
        let list = recipes.map(mapFunction);

        return (
            <>
                <h3>List</h3>
                <ul>
                    {list}
                </ul>
                <Link to="/new">New recipe</Link>
            </>
        );
    }
}

export default Recipes;

