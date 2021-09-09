import React from 'react'
import Foundation from './Foundation'
import RoomContainer from './RoomContainer'
import Roof from './components/Roof'
import './house.css'

const House = ({pillar}) => {
    return (
        <div className="house">
            {pillar >= 4 && <Roof/>}
            {pillar ? ((pillar >= 4 || pillar % 4 === 0) && <RoomContainer pillar= {pillar} />) : 'No Room'}
            <Foundation/>
        </div>
    )
}

export default House
