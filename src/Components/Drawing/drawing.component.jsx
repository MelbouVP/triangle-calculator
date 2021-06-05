import React, { useRef, useEffect, useCallback } from 'react'


import './drawing.styles.scss'
function Drawing({ isDrawable, triangleSides }) {

    const canvasRef = useRef(null)


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
