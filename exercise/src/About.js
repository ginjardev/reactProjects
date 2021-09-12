import React from 'react'

const About = ({displayStyle}) => {
    return (
        <div className="about" style={{display: displayStyle}}>
            <div>
                <h3>About</h3>
                It was popularised in the 1960s with the release
                of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    )
}

export default About
