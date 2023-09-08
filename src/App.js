import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      teams: [
        { name: "Redbull", id: 1 },
        { name: "Ferrari", id: 2 },
        { name: "Mercedes", id: 3 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.teams.map((team) => {
          return (
            <div key={team.id}>
              <h1>{team.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
