import React from 'react'
import Icon from '../assets/Heart.png'
import {Link} from 'react-router-dom'
import '../App.css'


const Navigation = () => {
    return (
        <div className="nav-bar">
            <div className="icon">
                <img src={Icon}  alt="heart"/>
                <h4>INI - UBONG</h4>
            </div>
            <nav>
                <li><Link>Articles</Link></li>
                <li><Link>Snippet</Link></li>
                <li><Link>About</Link></li>
                <li className="contact"><Link>Contact</Link></li>
            </nav>
        </div>
    )
}

export default Navigation
