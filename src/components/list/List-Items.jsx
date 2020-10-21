import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../services/breaking-bad-api';

class List extends Component {
  state = {
    characters: []
  }

  componentDidMount = async() => {
    const characters = await getCharacters();

    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;
    return (
      <ul>
        {characters.map(character => {
          return (
            <li key={character.char_id}>
              <Link to={`/details/${character.char_id}`} >
                <h2>{character.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
 
export default List;
