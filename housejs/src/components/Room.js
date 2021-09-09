import React from 'react'
import Pillar from './Pillar'

const Room = ({pillar}) => {
    return (
        <div className="room">
             Room{pillar}
            <div className="room-pillar-container">
                <Pillar/>
                <Pillar/>
                <Pillar/>
                <Pillar/>
            </div>
        </div>
    )
}

export default Room
