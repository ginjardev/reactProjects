import React from 'react'
import Icon from '../assets/Heart.png'
import {Link} from 'react-router-dom'
import '../App.css'


const Navigation = () => {
    return (
        <div className="nav-bar">
            <div className="icon">
                <Link to="/">
                <img src={Icon}  alt="heart"/>
                <h4>ginjarDev</h4>
                </Link>
            </div>
            <nav>
                <li><Link to="/src/pages/Articles.js">Articles</Link></li>
                <li><Link>Snippet</Link></li>
                <li><Link to="/src/pages/About.js">About</Link></li>
                <li className="contact"><Link>Contact</Link></li>
            </nav>
        </div>
    )
}

export default Navigation
