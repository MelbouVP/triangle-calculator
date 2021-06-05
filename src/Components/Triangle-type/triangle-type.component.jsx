import React, { useEffect, useState, useCallback } from 'react'


import './triangle-type.styles.scss'
function TriangleType({ triangleSides, sendIsTriangleDrawable }) {



    const [triangleType, setTriangleType] = useState('')

    const calculateTriangleType = useCallback((triangleSides) => {
        

        // sort sides from smallest to biggest
        let [sideA, sideB, sideC] = [triangleSides.sideA, triangleSides.sideB, triangleSides.sideC].sort((a, b) => a-b);

        let triangleIsDrawable = true;

        if (sideA === sideC) {
            setTriangleType('Triangle is equilateral')
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
