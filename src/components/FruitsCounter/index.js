// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  mangoCount = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="container">
        <div className="fruite-container">
          <h1 className="title">
            Bob ate <span className="span">{mangoesCount}</span> mangoes
            <span className="span"> {bananasCount} </span> bananas
          </h1>
          <div className="fruite-crad-container">
            <div className="fruite-crad">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                type="button"
                className="button-1"
                onClick={this.mangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruite-crad">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                type="button"
                className="button-1"
                onClick={this.bananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
