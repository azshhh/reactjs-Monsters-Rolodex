import { Component } from "react";

class Card extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div key={monster.id}>
        <img
          src={`https://robohash.org/${monster.id}/set=set2&size=180x180`}
          alt={`monsters ${monster.name}`}
        />
        <h1>{monster.name}</h1>
        <p>{monster.email}</p>
      </div>
    );
  }
}

export default Card;
