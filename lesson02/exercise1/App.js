import React, {Component} from 'react';
import Hello from './Hello';
import NumbersSum from './NumbersSum';
import NumbersList from './NumbersList';

class App extends Component {
    render() {
        let array = [2, 3, 4, 5, 6, 7];

        return (
            <>
                <h1>Hello, World</h1>

                <Hello helloName="Kristian"></Hello>

                <NumbersSum numbers={array}></NumbersSum>

                <NumbersList numbers={array}></NumbersList>
            </>
        );
    }
}

export default App;