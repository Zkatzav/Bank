import React, {Component} from 'react'
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        let operations = this.props.operations
        return (
        <div>
            <ul>
                {operations.map( (o, i) => 
                    <li>
                        <Transaction key={i} amount={o.amount} vendor={o.vendor} category={o.category} /> 
                    </li>    
                )}
            </ul>
        </div>
        )
    }
}


export default Transactions