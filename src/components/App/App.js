import { Component } from 'react';
import './App.css';
import TricksContainer from '../TricksContainer/TricksContainer'

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
    this.fetchTricks()
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
      console.log(data)
      this.setState({ tricks: data })
    })
    .catch(error => {
      this.setState({ error: true, errorMessage: error.message })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {(this.state.error && <h1>{this.state.errorMessage}</h1>)}
        <TricksContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;