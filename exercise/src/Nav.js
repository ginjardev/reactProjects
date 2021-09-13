import React from 'react'

const Nav = ({setLink}) => {
    return (
        <nav className="nav">
            <li onClick={()=>setLink('home')}>Home</li>
            <li onClick={()=>setLink('about')}>About</li>
            <li onClick={()=>setLink('contact')}>Contact</li>
        </nav>
    )
}

export default Nav
