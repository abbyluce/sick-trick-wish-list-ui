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

  componentDidMount = () => {
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

  addTrick = newTrick => {
    this.setState({
      tricks: [...this.state.tricks, newTrick]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {this.state.error && <h2>{this.state.errorMessage}</h2>}
        <Form addTrick={this.addTrick}/>
        <TricksContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;