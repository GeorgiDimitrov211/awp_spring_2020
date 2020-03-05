import React, {Component} from 'react';
import { Router, Link } from "@reach/router";
import Recipes from './Recipes';
import Recipe from './Recipe';
import NotFound from './NotFound';
import NewRecipe from './NewRecipe';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [
                {id: 0, title: "Pizza 1", desc: "This is pizza 1",
                    ingredients: ["cheese", "tomato"]},
                {id: 1, title: "Pizza 2", desc: "This is pizza 2",
                    ingredients: ["cheese", "tomato"]},
                {id: 2, title: "Pizza 3", desc: "This is pizza 3",
                    ingredients: ["cheese", "garlic"]},
                {id: 3, title: "Pizza 4", desc: "This is pizza 4",
                    ingredients: ["cheese", "onion"]}
            ]
        }
    }

    submit(title, desc) {
        const newRecipe = {
            id: Math.random(),
            title: title,
            desc: desc,
            ingredients: []
        };
        this.setState({
            recipes: [...this.state.recipes, newRecipe]
        })
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
                    <NewRecipe path="/new" submit={(title, desc) => this.submit(title, desc)}></NewRecipe>
                    <NotFound default></NotFound>
                </Router>

            </>
        );
    }
}

export default App;

