import React, {Component} from 'react';



/*
    This template demonstrates the structure of a simple React app that fetches data from a Web API.

    The actual implementation is left as an exercise.
 */




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [] // Empty state
        }
    }

    // This method is automatically invoked when this App is first mounted (rendered).
    componentDidMount() {
        this.getData();
    }

    // Fetching data from the API and putting it in the state
    async getData() {
        // TODO:
        //  Step 1: Fetch data
        //  Step 2: Set data in this.state
    }

    // Posting new data to the API
    async postData() {
        // TODO:
        //  Step 1: Use fetch to POST new data
        //  Step 2: Call 'this.getData()' to update contents in state
    }

    render() {
        return (
            // TODO: Render stuff
            <>
                <p>hello</p>
            </>
        )
    }
}

export default App;