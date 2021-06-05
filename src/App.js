import React, { Component } from 'react'



import DataInput from './Components/Data-input/data-input.component'


import './App.scss';

export class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1>
            Triangle calculator
          </h1>
        </div>
        <div className="app__output">
          <div className="app__output--content">
            
          </div>
        </div>
        <div className="app__input">
          <DataInput />
        </div>
  
      </div>
    );
  }
}

export default App

