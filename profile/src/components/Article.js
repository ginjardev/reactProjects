import React from 'react'

const Article = ({title}) => {
    return (
        <div className="content">
            <div>
                <div><p className="time">September 08, 2019</p></div>
                <div><h4>{title}</h4></div>
                <div>
                    <p>Reasoning, approach, and goals Goals Faster initial load times. Users only<br/> 
                    download the code they need for the features they are using. This…</p>
                </div>
                <div><p>Read More...</p></div>
            </div>
        </div>
    )
}

export default Article
