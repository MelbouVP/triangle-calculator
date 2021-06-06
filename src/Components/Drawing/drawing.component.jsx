import React, { useRef, useEffect, useCallback } from 'react'


import './drawing.styles.scss'
function Drawing({ isDrawable, triangleSides }) {


    // 1. This component is responsible for drawing the triangle 
    // based on received triangleSides prop from the parent - App
    // 2. Triangles that are invalid do not get drawn


    // Canvas ref is responsible for remembering triangle drawing between component rerenders
    const canvasRef = useRef(null)


    // Determine scale of image in regards to provided length of triangle sides
    const determineFactor = useCallback((sideC) => {
        
        if(sideC < 5) return 120
        if(sideC < 10) return 58
        if(sideC < 16) return 30
        if(sideC < 22) return 22
        if(sideC < 35) return 14
        if(sideC < 50) return 8
        if(sideC < 75) return 7
        if(sideC < 101) return 5    

        },[]
    )

  
    useEffect(() => {

        // if triangle is not possible to draw, don't start calculation
        if(!isDrawable) return

        // sort sides from smallest to biggest
        let [sideA, sideB, sideC] = [triangleSides.sideA, triangleSides.sideB, triangleSides.sideC].sort((a, b) => a-b);

        // canvas size is equal to canvas html element
        let canvasWidth = 600
        let canvasHeight = 500

        // initialize canvas
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.lineWidth = 3;
        
        // clean previous drawings
        ctx.clearRect(0, 0, 600, 500);


        // factor in different side sizes in order to fit in the canvas 
        // the smaller the sides the bigger the factor and vice versa 
        let factor = determineFactor(sideC)


        // Calculate triangle area using Heron's formula 
        let area = 0.25 * Math.sqrt((sideA+sideB+sideC) * (-sideA+sideB+sideC)*(sideA-sideB+sideC)*(sideA+sideB-sideC)) 
        
        // Calculate triangle height using triangle height formula 
        let height = ((2 * area) / sideC).toPrecision(2); 


        // Slope of base is the distance from side A starting point to heighest point of triangle
        // it is calculated using Pythogorean theorem (d = sqrt( a^2 + b^2 )  ) 
        // side A is taken to ensure that if triangle is isoceles then drawing is symetrical (base will be the shortest side)
        let slopeOfBase = Math.sqrt(Math.pow(sideA, 2) - Math.pow(height, 2)).toPrecision(2); 

        // Canva starting X coordinate is middle of canva width minus half of side C length 
        let initialPointX = canvasWidth / 2 - 0.5 * sideC * factor 

        // Canva starting Y coordinate is middle of canva height plus half of triangle height 
        // (because canva Y axis go in other direction) 
        let initialPointY = canvasHeight / 2 + 0.5 * height * factor 
        
        ctx.beginPath(); 
        // Move canva pen to canva starting coordinates 
        ctx.moveTo( initialPointX,  initialPointY); 

        // Draw triangle base
        // X coordinate is middle of canva width plus half of side C length
        // Y coordinate is middle of canva height plus half of triangle height   
        ctx.lineTo( (canvasWidth / 2 + 0.5 * sideC * factor), (canvasHeight/2 + 0.5 * height * factor))

        // Draw right side of triangle
        // X coordinate is middle of canva width plus half of side C length minus the distance of the slope
        // Y coordinate is middle of canva height minus half of triangle height 
        ctx.lineTo((canvasWidth / 2 + 0.5 * sideC * factor - slopeOfBase * factor), (canvasHeight/2 - 0.5 * height * factor));


        // Draw left side of triangle
        ctx.lineTo(initialPointX, initialPointY); 
        
        ctx.stroke();
                        
        
    }, [isDrawable,triangleSides, determineFactor])

    return (
        <div className="drawing">
            {
                isDrawable ?
                <canvas width="600" height="500"
                ref={canvasRef}
            />
            : null
            }
        </div>
    )
}

export default React.memo(Drawing)
