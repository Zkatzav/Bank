import React, {Component} from 'react'

class Transaction extends Component {
    render() {
        return (
            <div>
                <span>{this.props.amount}  </span> 
                <span>{this.props.vendor}  </span> 
                <span>{this.props.category}  </span>
            </div>
        )
    }
}
export default Transaction