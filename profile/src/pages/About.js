import React from 'react'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <div className="about1">
                <div className="aboutwrapper">
                   <div className="about2">
                        <div>
                            <h1>About</h1>
                        </div>
                        <div className="detail1">
                            <div>
                                I specialize in rapidly building software companies and web applications.
                                I use an entrepreneurial <br/> mindset to inform my design and engineering output.
                            </div>
                            <div>
                                I prioritize communication while building. I am an excellent communicator, 
                                both written and verbal. I <br/> use screen casts, video calls,
                                and written words to lead teams built on trust and transparency.
                            </div>
                            <div>
                                I am an expert in JavaScript, working primarily in <Link className="blue">React</Link> and Firebase, 
                                but I have experience working <br/> in a wide range of technologies including Node &amp; Express, 
                                MongoDB, PostgreSQL, React Native, <br/> Gatsby, REST API design, CircleCI, 3rd party APIs 
                                (Stripe, Discord, Slack, Amplitude, Google Auth, <br/> etc.),
                                AWS (S3, CloudFront, Cognito, Build Pipeline, Route53, ACM), and many more.
                            </div>
                            <div>
                                Additionally, I am an experienced interface and user experience designer. 
                                I use Figma <br/> to communicate ideas through low and high fidelity mockups, 
                                design systems, and clickable <br/>prototypes.
                            </div>
                        </div>
                   </div>
                   <div className="about3">
                        <div>
                            <h4>Personal</h4>
                        </div>
                        <div className="detail2">
                            <div>
                                I’ve been a gamer my entire life. I play StarCraft, Fortnite, and Nintendo 64.
                            </div>
                            <div>
                                I ran Division 3 track (400m) at Rochester Institute of Technology, 
                                and still hold school records to this day.
                            </div>
                            <div>
                                I play guitar and bass, and I’m learning to record my own songs.
                            </div>
                            <div>
                                I collect video games and action figures, and love SciFi.
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
