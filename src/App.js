import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    personagens: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ personagens: response.data });
  }

  render() {

    const { personagens } = this.state;

    return (
      <div>
        <h1>Listar os Personagens</h1>
        {personagens.map(personagens => (
          <li key={personagens.show.id}>
            <h2>
              <strong>Título: </strong>
              {personagens.show.name}
            </h2>
            <p>
              {personagens.show.url}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default App;