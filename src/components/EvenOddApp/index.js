// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  createRandomNumber = () => Math.ceil(Math.random() * 100)

  incrementCount = () => {
    const randomNumber = this.createRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="paragraph">Count is {text}</p>
        <button className="button" type="button" onClick={this.incrementCount}>
          Increment
        </button>
        <p className="para">*Increase By random Number Between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
