import React, {Component} from 'react';
import {Link} from "@reach/router";

class NewRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: ""
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit() {
        this.props.submit(this.state.title, this.state.desc);
    }

    render() {
        return (
            <>
                <input name="title" onChange={event => this.onChange(event)} type="text"/>
                <input name="desc" onChange={event => this.onChange(event)} type="text"/>
                <button onClick={_ => this.onSubmit()}>Save recipe</button>

                <br/><Link to="/">Back</Link>
            </>
        )
    }
}

export default NewRecipe;

