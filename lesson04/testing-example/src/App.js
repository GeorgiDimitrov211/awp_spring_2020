import React, {Component} from 'react';
import ButtonCallback from "./ButtonCallback";
import ListSum from "./ListSum";
import AddNumber from "./AddNumber";
import Hello from "./Hello";

class App extends Component {

    render() {
        return (
            <>
                <Hello just_a_name="Kristian"/>

                <AddNumber/>

                <ButtonCallback callback={_ => console.log("Button click!")}/>

                <ListSum numbers={[1,2,3,4,5]}/>
            </>
        );
    }
}

export default App;
