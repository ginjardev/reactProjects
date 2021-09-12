import React from 'react'

const Nav = ({changeContact, changeAbout, changeHome}) => {
    return (
        <nav className="nav">
            <li onClick={()=>changeHome()}>Home</li>
            <li onClick={()=>changeAbout()}>About</li>
            <li onClick={()=>changeContact()}>Contact</li>
        </nav>
    )
}

export default Nav
