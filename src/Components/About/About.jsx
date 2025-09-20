import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />

            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>We are committed to pursuing excellence in every aspect of university life. We look at excellence as an idea that is more than a benchmark, more than a goal, more than a distant destination. In the context of the Academic Project, excellence is the foundation of rigour in our scholarship, including the advancement, imparting, and the application of knowledge. It informs our learning and teaching, wider engagement, as well as our management and governance processes.</p>
                <p>The University’s ultimate goal is to be a University that impactfully supports societal development. We value and encourage creativity and strive to identify, question, and challenge the status quo. Our knowledge will continue to contribute to the development of the Free State, South Africa, and the African continent and to advance global knowledge and understanding.</p>
                <p>We recognise our obligation towards our students, staff, stakeholders, society in general, and the global knowledge community. To this end, we will be stewards of good governance who are accountable, responsible, and dutiful in our actions. We will be conscientious in our utilisation of the financial and physical resources of the University as well as concerning our impact on the wider environment.</p>

            </div>

        </div>
    )
};

export default About
