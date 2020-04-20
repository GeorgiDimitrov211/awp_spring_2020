import React, {Component} from 'react';
import {Link} from "@reach/router";

class Kittens extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newKittenName: ""
        }
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    render() {
        return (
            <>
                <h1>Kittens (local)</h1>
                <ol>
                    {this.props.kittens.map(kitten =>
                        <li key={kitten._id}>
                            <Link to={`/kitten/${kitten._id}`}>{kitten.name}</Link>
                        </li>)}
                </ol>

                <input name="newKittenName" onChange={(event) => this.handleChange(event)} type="text"/>
                <button onClick={_ => this.props.addKitten(this.state.newKittenName)}
                        type="submit">Add New Kitten</button>
            </>
        );
    }

}

export default Kittens;
