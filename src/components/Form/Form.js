import { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitNewTrick = event => {
        event.preventDefault()
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        // fetch('http://localhost:3001/api/v1/tricks'), {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({ stance: newTrick.stance, name: newTrick.name, obstacle: newTrick.obstacle, tutorial: newTrick.tutorial })
        // }
        // .then(response => response.json())
        // .then(this.props.addTrick(newTrick))
        // .then(this.clearInputs())
        // .then(this.props.fetchTricks())
        this.props.addTrick(newTrick)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        })
    }

    render() {
        return (
            <div className="form">
            <select id="stance" name="stance" value={this.state.stance} onChange={event => this.handleChange(event)}>
                <option value="choose-stance" selected>Choose your Stance</option>
                <option value="regular">regular</option>
                <option value="switch">switch</option>
                
            </select>
            <form>
                <input type="text" 
                placeholder="Name of Trick" 
                name="name" 
                value={this.state.name} 
                onChange={event => this.handleChange(event)} />
            </form>
            <select id="obstacle" name="obstacle" value={this.state.obstacle} onChange={event => this.handleChange(event)}>
                <option value="choose-obstacle" selected>Choose your Obstacle</option>
                <option value="flatground">flatground</option>
                <option value="ledge">ledge</option>
                <option value="rail">rail</option>
                <option value="stairs">stairs</option>
                <option value="pool">pool</option>
            </select>
            <form>
                <input type="text" 
                placeholder="Link to Tutorial" 
                name="tutorial" 
                value={this.state.tutorial}
                onChange={event => this.handleChange(event)} />
            </form>
            <button onClick={event => this.submitNewTrick(event)}>Send It!</button>
            </div>
        )
    }
}


export default Form