import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {HiOutlineChevronDoubleRight} from 'react-icons/hi'
import {FaJsSquare} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiStorybook} from 'react-icons/si'
import {MdChatBubbleOutline} from 'react-icons/md'
import Card from '../components/Card'
import Button from '../components/Button'
import Footer from '../components/Footer'

const cards = [1, 2, 3];
const Homepage = () => {
    return (
        <div className="intro">
            <h1 className="name">
                I’m Iniubong, software engineer <br/>
                and interface designer.
            </h1>
            <div className="work">
                I specialize in rapidly prototyping software companies and web<br/>
                applications. I talk about my journey on <span className="one"><Link>Twitter</Link></span>, commit code to <span className="two"><Link>Github</Link></span>,<br/>
                and take shots on <span className="three"><Link>Dribble</Link></span>.
            </div>
            <div className="articles">
                <div className="latest">
                    <h3 className="h3">Latest Articles</h3>
                    <div className="chevron">
                        <div>All articles</div> 
                        <div className="chevy">
                            <HiOutlineChevronDoubleRight/>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div className="article">
                        <div className="js"><FaJsSquare/></div>
                        <h4>Reducing cognitive load by theming my tools</h4>
                    </div>
                    <div className="date">September 08, 2019</div>
                    <div className="article">
                        <div className="react"><FaReact/></div>
                        <h4>Code splitting &amp; lazy loading a server side rendered React app</h4>
                    </div>
                    <div className="date">September 08, 2019</div>
                    <div className="article">
                        <div className="storybook"><SiStorybook/></div>
                        <h4>Easy project switching with Itermocil &amp; command line shortcuts</h4>
                    </div>
                    <div className="date">September 08, 2019</div>
                </div>
            </div>
            <div className="projects">
                <h3 className="h3">Projects</h3>
                <div className="grid">
                    {
                        cards.map(
                            function(num, index){
                                if(index === 0){
                                    return <Card style={{borderLeftColor: '#CCA9F4'}} className="item1 card" title="Yawnch" text="An online coworking community for indie hackers, 
                                    entreprenuers, and founders. Chat live with app developers, 
                                    designers, and mentors. Access video courses and tutorials."/>
                                }else if (index === 1){
                                    return <Card style={{borderLeftColor: '#81F59B'}} className="item2 card" title="Stockstream.tv" text="On a mission to democratize investing knowledge. 
                                    My partner and I bootstrapped this company with zero funding."/>
                                } else if(index === 2){
                                    return <Card style={{borderLeftColor: '#D9534D'}} className="item3 card" title="All Tutles" text="I lead web development full time at All Turtles, an AI startup studio."/>
                                }
                                return num;
                            }
                        )
                    }
                </div>
            </div>
            <div className="reach">
                <div className="what">
                    <h1 className="hello">What are you working on?</h1>
                </div>
                <div className="text">
                Let’s have a conversation! I’d love to hear about what you’re <br/>
                         working on and find a way to work together.
                </div>
                <div className="green-btn">
                    <Button className="btn-chat" title="Chat" icon={<MdChatBubbleOutline className="bc"/>} 
                    style={{border:'none', color: '#111A20', backgroundColor:'#83F9A2'}}/>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage
