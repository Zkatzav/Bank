import React, {Component} from 'react'
import { async } from 'q';


class Operations extends Component {
    constructor() {
        super()
        this.state = {
            amount: Number,
            vendor: null,
            category: null
        }
    }

    handleChange = async event => {
        const target = event.target
        const value = target.value
        const name = target.name
        await this.setState({[name]: value});   
    }

    sendNewOperation = () => {
        
        let newOperation = {
            amount: this.state.amount,
            vendor: this.state.vendor,
            category: this.state.category
        }
        this.props.getNewOperations(newOperation)
    }

    render() {
        return (
        <div>
            <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} placeholder="Amount"></input>
            <input type="text" name="vendor" value={this.state.vendor} onChange={this.handleChange} placeholder="Vendor"></input>
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange} placeholder="Category"></input>
            
            <button onClick={this.sendNewOperation}>deposit</button>
            <button onClick={this.sendNewOperation}>withdraw</button>
        </div>
        )
    }
}


export default Operations