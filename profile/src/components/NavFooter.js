import React from 'react'
import '../App.css'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


const NavFooter = () => {
    return (
        <div className="footer">
            <div className="wrapper">
            <div className="copyright">
            Designed and developed by Ryan Warner.<br/>
            Built with <strong>Gatsby</strong>. Hosted on <strong>Firebase</strong>. Type set in <strong>Jost*</strong>.
            </div>
            <div className="contact-icons">
                <div><FaTwitter/></div>
                <div><FaGithub/></div>
                <div><FaDribbble/></div>
            </div>
            </div>
        </div>
    )
}

export default NavFooter
