import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>The University's ultimate goal is to impart and generate new knowledge that impactfully supports societal development.</h1>
                <p>The UFS is a research-led, student-centered and regionally-engaged university that contributes to development and social justice through the production of globally competitive graduates and knowledge.</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>

            </div>
        </div>
    )
};

export default Hero
