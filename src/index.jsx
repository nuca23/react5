import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    increment = () => {
        this.setState({
            name:"nuca"
        })
      };

    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={this.increment}>
                    ნუცა {this.state.name}
                </button>
            </React.Fragment>
        );
    }
}

const el = document.getElementById("root");
ReactDOM.render(<App />, el);
