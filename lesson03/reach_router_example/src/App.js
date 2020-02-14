import React, {Component} from 'react';
import { Router } from "@reach/router";

import FruitList from './FruitList';
import About from './About';
import Nav from "./Nav";
import ShowStuff from "./ShowStuff";

class App extends Component {

    render() {
        return(
            // Every route target (defined in the path attributes below) needs to appear inside a <Router> component
            <>
                <Nav/> {/* <Nav> is not a target for routing, so we put it outside of <Router>*/}
                <Router>
                    <FruitList path="/"></FruitList>
                    <About path="/about"></About>

                    {/* ':name' will turn into this.props.name inside the component */}
                    {/* Browser address bar will show: http://localhost:3000/stuff/some-name */}
                    <ShowStuff path="/stuff/:name"></ShowStuff>
                </Router>
            </>
        );
    }
}

export default App;
