import React, { Component } from 'react'

import './data-input.component.scss'

export class DataInput extends Component {

    constructor(props){
        super(props)

        this.state = {
            triangleSides: {
                sideA: '',
                sideB: '',
                sideC: ''
            }
        }
    }

    handleChange = (e) => {

        let { name, value } = e.target

        // 1.Sanitze user input
        // handle cases when user input is text or 
        // entered value is less than 1 (such triangle is not possible)
        if(isNaN(value) || value < 1) return
        // round input number to whole numbers
        value = Math.ceil(value)

		
        this.setState( (prevState) => ({
            ...prevState,
            triangleSides: {
                ...prevState.triangleSides,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()


        for (const side in this.state.triangleSides) {
            if(this.state.triangleSides[side] === '') return
        }

        
        console.log('submitting')

        this.setState(() => ({
            triangleSides: {
                sideA: '',
                sideB: '',
                sideC: ''
            }
        }))

    }


    render() {
        const { sideA, sideB, sideC } = this.state.triangleSides

        console.log(this.state.triangleSides)

        return (
            <div className="data-input">

                <form className="data-input__content" onSubmit={this.handleSubmit}>

                    <div className='data-input__content--input' >
                            <input 
                                type='number'
                                step='1' 
                                // min='1'
                                name="sideA" 
                                id="sideA" 
                                value={sideA} 
                                onChange={this.handleChange} 
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
                                name="sideB" 
                                id="sideB" 
                                value={sideB} 
                                onChange={this.handleChange} 
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
                                name="sideC" 
                                id="sideC" 
                                value={sideC} 
                                onChange={this.handleChange} 
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
}

export default DataInput
