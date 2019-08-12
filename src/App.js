import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { async } from 'q';
import Operations from './components/Operations'
import Transactions from './components/Transactions';
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      operations : []
    }
  }

  getBalance = () => {
    let operations = [...this.state.operations]
    let balance = 0
    operations.forEach(o => balance += Number(o.amount))
    return balance
  }
  
  getNewOperations = async newOperations => {
      await axios.post('http://localhost:4200/transaction', newOperations)
      this.getTransactions()
  }

  async getTransactions() {
    let operations = await axios.get('http://localhost:4200/transactions')
    operations = operations.data
    this.setState({ operations })
  }

  async componentDidMount(){
    this.getTransactions()
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