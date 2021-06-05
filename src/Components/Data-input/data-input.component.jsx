import React, { useState } from 'react'

import './data-input.component.scss'

function DataInput({ sendInputData }) {

    const [triangleSides, setTriangleSides] = useState({
        sideA: '',
        sideB: '',
        sideC: ''
    })

    const handleChange = (e) => {

        let { name, value } = e.target

        // 1.Sanitze user input
        // handle cases when user input is text or 
        // entered value is less than 1 (such triangle is not possible) 
        // or more than 100 (limitation of functionality)
        if(isNaN(value) || value < 1 || value > 100) return
        // round input number to whole numbers
        value = Math.ceil(value)

		
        setTriangleSides({
            ...triangleSides,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        // Check if any of the values are empty before submitting
        for (const side in triangleSides) {
            if(triangleSides[side] === '') return
        }

        
        sendInputData(triangleSides)

        setTriangleSides({
            sideA: '',
            sideB: '',
            sideC: ''
        })

    }

    const { sideA, sideB, sideC } = triangleSides

    console.log(triangleSides)

    return (
        <div className="data-input">

            <form className="data-input__content" onSubmit={handleSubmit}>

                <div className='data-input__content--input' >
                        <input 
                            type='number'
                            step='1' 
                            min='1'
                            max='100'
                            name="sideA" 
                            id="sideA" 
                            value={sideA} 
                            onChange={handleChange} 
                            required
                        />
                        <label 
                            className={sideA !== '' ? 'shrink-label' : null} htmlFor="sideA">
                                A side
                        </label>
                </div>

                <div className='data-input__content--input' >
                        <input 
                            type='number' 
                            step='1'
                            min='1'
                            max='100'
                            name="sideB" 
                            id="sideB" 
                            value={sideB} 
                            onChange={handleChange} 
                            required
                        />
                        <label 
                            className={sideB !== '' ? 'shrink-label' : null} htmlFor="sideB">
                                B side
                        </label>
                </div>

                <div className='data-input__content--input' >
                        <input 
                            type='number'
                            step='1' 
                            min='1'
                            max='100'
                            name="sideC" 
                            id="sideC" 
                            value={sideC} 
                            onChange={handleChange} 
                            required
                        />
                        <label 
                            className={sideC !== '' ? 'shrink-label' : null} htmlFor="sideC">
                                C side
                        </label>
                </div>


                <div className="data-input__content--submit-btn">
                    <button type="submit">Calculate</button>
                </div>


            </form>
            
        </div>
    )
}

export default DataInput
