import React, {Component} from 'react';
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";

class App extends Component {

    render() {
        return (
            <>
              <HelloExample just_a_name="fellow programmer"/> {/* just_a_name is a prop */}
              <ButtonExample/>
              <br/><br/>
              <InputTextExample/>
            </>
        );
    }
}

export default App;
