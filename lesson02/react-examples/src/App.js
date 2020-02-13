import React, {Component} from 'react';
import ButtonExample from "./ButtonExample";
import InputTextExample from "./InputTextExample";
import HelloExample from "./HelloExample";
import NameListExample from "./NameListExample";
import IsItFriday from "./IsItFriday";
import ListSum from "./ListSum";
import AddNumber from "./AddNumber";

class App extends Component {

    render() {
        return (
            <>
                <AddNumber/>

                <IsItFriday></IsItFriday>

                <HelloExample just_a_name="fellow programmer"/> {/* just_a_name is a prop */}

                <ButtonExample/>

                <br/><br/>

                <InputTextExample/>

                <NameListExample names={['Kristian', 'Jes', 'Mads', 'Torill']}/>

                <ListSum numbers={[1,2,3,4]}></ListSum>


            </>
        );
    }
}

export default App;
