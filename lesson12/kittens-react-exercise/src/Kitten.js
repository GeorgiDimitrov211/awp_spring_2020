import React, {Component} from 'react';
import {Link} from "@reach/router";

class Kitten extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newHobby: ""
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    render() {
        const kitten = this.props.getKitten(this.props.id);
        console.log(this.props.id);

        let content = <p>Loading</p>;
        if (kitten) {
            content =
                <>
                    <h1>{kitten.name}</h1>

                    <h3>Hobbies</h3>
                    <ul>
                        {kitten.hobbies.map(h => <li key={h}>{h}</li>)}
                    </ul>

                    <input name="newHobby" onChange={(event) => this.handleChange(event)} type="text"/>
                    <button onClick={_ => this.props.addHobby(this.props.id, this.state.newHobby)}
                            type="submit">Add New Kitten</button>

                    <br/>
                    <Link to="/">Back</Link>
                </>
        }

        return content;
    }
}

export default Kitten;
