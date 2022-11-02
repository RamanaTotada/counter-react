import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading"> count</h1>
        <h1 className="count">{count}</h1>
        <button className="button" onClick={this.onIncrement}>
          {' '}
          increment
        </button>
        <button className="button" onClick={this.onDecrement}>
          {' '}
          decrement
        </button>
      </div>
    )
  }
}

export default Counter
