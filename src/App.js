import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Redbull", lastName: "Racing" },
    };
  }

  render() {
    const { firstName, lastName } = this.state.name;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {firstName} {lastName}
          </p>
          <button
            onClick={() => {
              // setState with Object
              // this.setState({
              //   name: { firstName: "Mercedes", lastName: "Racing" },
              // });
              // console.log(this.state);

              // setState with callback as setState behaves asynchronously
              this.setState(
                () => {
                  return {
                    name: { firstName: "Mercedes", lastName: "Racing" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );

            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
