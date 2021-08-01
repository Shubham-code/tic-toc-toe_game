import React from 'react'
import "./index.css"

function SquareComponent(props) {

    const designClasses = props.className ? `${props.className} square` : "square" 
    return (
        <span className={designClasses} onClick = {props.onClick}>
            {props.state}
        </span>
        
        
    )
}

export default SquareComponent
