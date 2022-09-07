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

    render() {
        return (
            <div className="form">
            {/* <label for="stance">Choose your Stance:</label> */}
            <select id="stance" name="stance">
                <option value="regular">regular</option>
                <option value="switch">switch</option>
                <option value="choose-your-stance" selected>Choose your Stance:</option>
            </select>
            <form>
                <input type="text" placeholder="Name of Trick" name="name" value={this.state.name} />
            </form>
            <select id="obstacle" name="obstacle">
                <option value="flatground">flatground</option>
                <option value="ledge">ledge</option>
                <option value="rail">rail</option>
                <option value="stairs">stairs</option>
                <option value="pool">pool</option>
                <option value="choose-your-obstacle" selected>Choose your Obstacle:</option>
            </select>
            <form>
                <input type="text" placeholder="Link to Tutorial" name="tutorial" value={this.state.tutorial} />
            </form>
            <button>Send It!</button>
            </div>
        )
    }
}


export default Form