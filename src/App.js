import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { async } from 'q';
import Operations from './components/Operations'
import Transactions from './components/Transactions';


class App extends Component {
  constructor() {
    super()
    this.state = {
      operations : [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]
    }
  }

  getBalance = () => {
    let operations = [...this.state.operations]
    let balance = 0
    operations.forEach(o => balance += Number(o.amount))
    return balance
  }
  
  getNewOperations = newOperations => {
    let operations = [...this.state.operations]
    operations.push(newOperations)
    this.setState({ operations })
    this.componentDidMount()  
  }

  render(){
    return (
      <div className="App">
       <div>Current {this.getBalance()}</div>
        <Transactions operations={this.state.operations} /> 
        <Operations getNewOperations={this.getNewOperations}/>
      </div>
    )
  }
}

export default App;