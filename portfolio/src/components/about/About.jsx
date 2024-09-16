import React from 'react';
import "./about.css";
import AboutImg from "../../assets/profile.jpg";
import CV from "../../assets/Lauro-CV.jpg"
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className='about__img' />

            <div className="about__data">
                <Info />

                <p className="about__description">As a Frontend Developer, I create visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript. My experience includes dynamic ad banners and web apps. I excel in collaboration, problem-solving, and staying current with web development trends to deliver exceptional results.</p>

                <a download="" href={CV}  className="button button--flex">
                    Download CV
                </a>
            </div>
        </div>
    </section>
  )
}

export default About