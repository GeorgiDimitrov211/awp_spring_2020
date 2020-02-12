import React, {Component} from 'react';
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";
import NameListExample from "./NameListExample";

class App extends Component {

    render() {
        return (
            <>
              <HelloExample just_a_name="fellow programmer"/> {/* just_a_name is a prop */}

              <ButtonExample/>

              <br/><br/>

              <InputTextExample/>

              <NameListExample names={['Kristian', 'Jes', 'Mads', 'Torill']}/>
            </>
        );
    }
}

export default App;
