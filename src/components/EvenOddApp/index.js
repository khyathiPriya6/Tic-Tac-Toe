import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    values: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  }

  enteringO = () => {
    const {values} = this.state
    index = Math.ceil(Math.random()*15)
    if(values[index] === ""){
        values[index] = "O"
    }
    else{
        this.enteringO()
    }
    }
  }

  enteringX = id => {
    const {values} = this.state

    values[id - 1] = 'X'
    this.setState(prevState => ({values: prevState.values}))
    this.enteringO()
  }

  
  render(){
    const {values} = this.state
    return (
      <div className="main-container">
        <h1>TICTACTOE</h1>
        <div className="app-container">
          <div className="game-box">
            <div className="row-box">
              <div onClick={this.enteringX} id="1" className="each-box">
                <p>{values[0]}</p>
              </div>
              <div onClick={this.enteringX} id="2" className="each-box">
                <p>{values[1]}</p>
              </div>
              <div onClick={this.enteringX} id="3" className="each-box">
                <p>{values[2]}</p>
              </div>
              <div onClick={this.enteringX} id="4" className="each-box">
                <p>{values[3]}</p>
              </div>
            </div>
            <div className="row-box">
              <div onClick={this.enteringX} id="5" className="each-box">
                <p>{values[4]}</p>
              </div>
              <div onClick={this.enteringX} id="6" className="each-box">
                <p>{values[5]}</p>
              </div>
              <div onClick={this.enteringX} id="7" className="each-box">
                <p>{values[6]}</p>
              </div>
              <div onClick={this.enteringX} id="8" className="each-box">
                <p>{values[7]}</p>
              </div>
            </div>
            <div className="row-box">
              <div onClick={this.enteringX} id="9" className="each-box">
                <p>{values[8]}</p>
              </div>
              <div onClick={this.enteringX} id="10" className="each-box">
                <p>{values[9]}</p>
              </div>
              <div onClick={this.enteringX} id="11" className="each-box">
                <p>{values[10]}</p>
              </div>
              <div onClick={this.enteringX} id="12" className="each-box">
                <p>{values[11]}</p>
              </div>
            </div>
            <div className="row-box">
              <div onClick={this.enteringX} id="13" className="each-box">
                <p>{values[12]}</p>
              </div>
              <div onClick={this.enteringX} id="14" className="each-box">
                <p>{values[13]}</p>
              </div>
              <div onClick={this.enteringX} id="15" className="each-box">
                <p>{values[14]}</p>
              </div>
              <div onClick={this.enteringX} id="16" className="each-box">
                <p>{values[15]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
