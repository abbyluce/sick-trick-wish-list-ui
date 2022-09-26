import { Component } from 'react';
import './App.css';
import TricksContainer from '../TricksContainer/TricksContainer'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [],
      error: false,
      errorMessage: ''
    }
  }

  fetchTricks = () => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(response => {
      if (!response.ok) {
        throw Error('Error getting data')
      } else {
        return response.json()
      }
    })
    .then(data => {
      this.setState({ tricks: data })
    })
    .catch(error => {
      this.setState({ error: true, errorMessage: error.message })
    })
  }

  componentDidMount = () => {
    this.fetchTricks()
  }

  addTrick = () => {
    this.fetchTricks()
  }

  deleteTrick = id => {
    fetch(`http://localhost:3001/api/v1/tricks/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ tricks: data })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {this.state.error && <h2>{this.state.errorMessage}</h2>}
        <Form addTrick={this.addTrick} fetchTricks={this.fetchTricks}/>
        <TricksContainer deleteTrick={this.deleteTrick} tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;