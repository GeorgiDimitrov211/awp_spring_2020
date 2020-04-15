import React, {Component} from 'react';
import AuthService from './AuthService';

class App extends Component {
    API_URL = 'http://localhost:8080/api';

    constructor(props) {
        super(props);

        // Initialize the auth service with the path of the API authentication route.
        this.Auth = new AuthService(`${this.API_URL}/users/authenticate`);
        this.state = {
            kittens: [],
            userCredentials: { // TODO: These need to come from a React login component.
                username: "krdo",
                password: "123"
            }
        };
        this.login(
            this.state.userCredentials.username,
            this.state.userCredentials.password
        ).then(_ => console.log("Logged in"));
    }

    async login(username, password) {
        try {
            const resp = await this.Auth.login(username, password);
            console.log("Authentication:", resp.msg);
            this.getData();
        } catch (e) {
            console.log("Login", e);
        }
    }

    async logout(event) {
        // TODO
    }

    async getData() {
        const resp = await this.Auth.fetch(`${this.API_URL}/kittens`);
        const data = await resp.json();
        this.setState({
            kittens: data
        });
    }

    render() {
        // TODO: This app should render a Login component when the user is not logged in.
        // TODO: Also, implement such a Login component.

        let contents = <p>No kittens!</p>;
        if (this.state.kittens.length > 0) {
            contents =
                <ol>
                    {this.state.kittens.map(kitten => <li key={kitten.id}>{kitten.name}</li>)}
                </ol>;
        }

        return (
            <div className="container">
                <h1>Kittens</h1>
                {contents}
            </div>
        );
    }
}

export default App;
