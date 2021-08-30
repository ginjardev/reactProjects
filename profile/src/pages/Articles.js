import React from 'react'
import Article from '../components/Article'
import Footer from '../components/Footer'

const Articles = () => {
    return (
        <div className="articlesBody">
            <div className="articlesSection">
                <div className="articlesSide">
                <div className="articlesH1"><h1>Articles</h1></div>
                <Article title="Code splitting &amp; lazy loading a server side rendered React app"/>
                <Article title="Easy project switching with Itermocil &amp; command line shortcuts"/>
                <Article title="Code splitting &amp; lazy loading a server side rendered React app"/>
                <Article title="Code splitting &amp; lazy loading a server side rendered React app"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Articles
