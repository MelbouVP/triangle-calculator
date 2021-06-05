import React, { useState } from 'react'


import Drawing from './Components/Drawing/drawing.component'
import TriangleType from './Components/Triangle-type/triangle-type.component'
import DataInput from './Components/Data-input/data-input.component'


import './App.scss';

function App() {


  const [triangleSides, setTriangleSides] = useState(null)
  const [isDrawable, setIsDrawable] = useState(false)


  const getIsTriangleDrawable = (bool) => {
    
    setIsDrawable(bool)
  }

  const getInputData = (data) => {
    console.log(data)
    setTriangleSides(data)
  }


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
            triangleSides={triangleSides}
            isDrawable={isDrawable}
          />
          <TriangleType
            triangleSides={triangleSides}
            sendIsTriangleDrawable={getIsTriangleDrawable}
          />
        </div>
      </div>
      <div className="app__input">
        <DataInput
          sendInputData={getInputData}
        />
      </div>
    </div>
  );
}

export default App

