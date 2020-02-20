import React, {Component} from 'react';
import {Link} from "@reach/router";

class Recipe extends Component {
    render() {
        const id = this.props.id;
        const recipe = this.props.getRecipe(id);

        return (
            <>
                <p>{recipe.title}</p>
                <p>{recipe.desc}</p>
                <Link to="/">Back</Link>
            </>
        );
    }
}

export default Recipe;

