import React, { Component } from 'react'


import Drawing from './Components/Drawing/drawing.component'
import TriangleType from './Components/Triangle-type/triangle-type.component'
import DataInput from './Components/Data-input/data-input.component'


import './App.scss';

export class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      triangleSides: null,
      isDrawable: false
    }
  }


  getIsTriangleDrawable = (bool) => {
    
    this.setState((prevState) => ({
      ...prevState,
      isDrawable: bool
    }))

  }

  getInputData = (data) => {
    
    this.setState( (prevState) => ({
      ...prevState,
      triangleSides: {...data}
    }))
  }


  render() {
    console.log(this.state)
    return (
      <div className="app">
        <div className="app__header">
          <h1>
            Triangle calculator
          </h1>
        </div>
        <div className="app__output">
          <div className="app__output--content">
            <Drawing 
              triangleSides={this.state.triangleSides}
              isDrawable={this.state.isDrawable}
            />
            <TriangleType
              triangleSides={this.state.triangleSides}
              sendIsTriangleDrawable={this.getIsTriangleDrawable}
            />
          </div>
        </div>
        <div className="app__input">
          <DataInput
            sendInputData={this.getInputData}
          />
        </div>
  
      </div>
    );
  }
}

export default App

