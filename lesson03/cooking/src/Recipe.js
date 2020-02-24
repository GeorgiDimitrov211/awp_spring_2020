import React, {Component} from 'react';
import {Link} from "@reach/router";

class Recipe extends Component {
    render() {
        const id = this.props.id;
        const recipe = this.props.getRecipe(id);

        const mapFunction = ingredient =>
            <li>
                <Link to={`/with/${ingredient}`}>{ingredient}</Link>
            </li>;
        let ingredients = recipe.ingredients.map(mapFunction);

        return (
            <>
                <p>{recipe.title}</p>
                <p>{recipe.desc}</p>

                <h3>Ingredients</h3>
                <ul>
                    {ingredients}
                </ul>

                <Link to="/">Back</Link>
            </>
        );
    }
}

export default Recipe;

