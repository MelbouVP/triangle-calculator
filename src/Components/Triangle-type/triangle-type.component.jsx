import React, { useEffect, useState, useCallback } from 'react'


import './triangle-type.styles.scss'
function TriangleType({ triangleSides, sendIsTriangleDrawable }) {



    const [triangleType, setTriangleType] = useState('')

    const calculateTriangleType = useCallback((triangleSides) => {
        

        // sort sides from smallest to biggest
        let [sideA, sideB, sideC] = [triangleSides.sideA, triangleSides.sideB, triangleSides.sideC].sort((a, b) => a-b);

        let triangleIsDrawable = true;

        if(sideA + sideB <= sideC){
            setTriangleType('It is not possible to calculate this kind of triangle')
            triangleIsDrawable = false
        } else if (sideA === sideC) {
            setTriangleType('Triangle is equilateral')
        } else if (sideA < sideB && sideB < sideC){
            setTriangleType('Triangle is scalene')
        } else {
            setTriangleType('Triangle is isoceles')
        }

        
        sendIsTriangleDrawable(triangleIsDrawable)
        window.scrollTo(0,0)

    },[setTriangleType, sendIsTriangleDrawable])
   
    useEffect(() => {
        setTriangleType('')
        if(!triangleSides) return
        calculateTriangleType(triangleSides)
    }, [triangleSides, calculateTriangleType])


    

        
    return (
        <div className="triangle-type">
            <div className="triangle-type__content">
                <h2>
                    {
                        triangleType
                    }
                </h2>
            </div>
        </div>
    )
    
}

export default React.memo(TriangleType)
