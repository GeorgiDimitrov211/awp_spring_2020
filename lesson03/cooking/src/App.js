import React, {Component} from 'react';
import { Router } from "@reach/router";
import Recipes from './Recipes';
import Recipe from './Recipe';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {id: 0, title: "Pizza 1", desc: "This is pizza 1",
                    ingredients: ["tomato", "garlic"]},
                {id: 1, title: "Pizza 2", desc: "This is pizza 2",
                    ingredients: ["tomato", "onion"]},
                {id: 2, title: "Pizza 3", desc: "This is pizza 3",
                    ingredients: ["tomato", "cheese"]},
                {id: 3, title: "Pizza 4", desc: "This is pizza 4",
                    ingredients: ["tomato", "cheese"]}
            ]
        }
    }

    getRecipe(id) {
        const findFunction = recipe => recipe.id === parseInt(id);
        return this.state.recipes.find(findFunction);
    }

    render() {
        return (
            <>
                <h1>Cooking Recipes</h1>
                <Router>
                    <Recipes path="/" data={this.state.recipes}></Recipes>
                    <Recipes path="/with/:filter" data={this.state.recipes}></Recipes>
                    <Recipe path="/recipe/:id"
                            getRecipe={(id) => this.getRecipe(id)}></Recipe>
                </Router>
            </>
        );
    }
}

export default App;

