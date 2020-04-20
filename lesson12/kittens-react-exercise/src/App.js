import React, {Component} from 'react';
import {Router} from "@reach/router";
import Kitten from "./Kitten";
import Kittens from "./Kittens";

import data from './data.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kittens: data
        };
    }

    getKittens() {
        return this.state.kittens;
    }

    getKitten(id) {
        return this.state.kittens.find(k => k._id === id);
    }

    addKitten(name) {
        this.setState({
            kittens: [...this.state.kittens, {name: name, hobbies: [], _id: Math.random() * 1000000 + ""}]
        })
    }

    addHobby(kittenId, hobby) {
        const newKittenState = [...this.state.kittens];
        const index = newKittenState.findIndex(kitten => kitten._id === kittenId);
        newKittenState[index].hobbies.push(hobby);
        this.setState({kittens: newKittenState});
    }

    render() {
        return (
            <>
                <Router>
                    <Kitten path="/kitten/:id" getKitten={id => this.getKitten(id)}
                            addHobby={(kittenId, hobby) => this.addHobby(kittenId, hobby)} />
                    <Kittens path="/" kittens={this.state.kittens}
                             addKitten={name => this.addKitten(name)}/>
                </Router>
            </>
        );
    }
}

export default App;
