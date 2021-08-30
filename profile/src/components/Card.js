import React from 'react'
import Button from './Button'

const Card = ({title, text, className, style}) => {
    return (
        <div className={className} style={style}>
            <div className="smallcard">
                <h3>{title}</h3>
                <div>{text}</div>
                <div><Button title='Button' className="btn"/></div>
            </div>
        </div>
    )
}

export default Card
