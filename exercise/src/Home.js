import React from 'react'

const Home = ({displayStyle}) => {

    return (
        <div className="home" style={{display: displayStyle}}>
            <div>
            <h3>Home</h3>
            There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words
            which don't look even slightly believable.
            </div>
        </div>
    )
}

export default Home
