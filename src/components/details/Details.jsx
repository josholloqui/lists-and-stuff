import React, { Component } from 'react';
import { getCharacter } from '../../services/breaking-bad-api';
import PropTypes from 'prop-types';

class Details extends Component {
  state = {
    character: {}
  }

  static propTypes = {
    match: PropTypes.object.isRequired 
  }

  componentDidMount = async() => {
    const character = await getCharacter(this.props.match.params.id);
    this.setState({ character: character[0] });
  }
  render() {
    const { name } = this.state.character;
    return (
      <>
        <h1>{name}</h1>
      </>
    );
  }
}
 
export default Details;
