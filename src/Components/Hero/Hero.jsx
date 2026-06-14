import React from 'react'
import profile_img from '../../assets/image1.jpg'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} alt="" className="profile-img" />
            <h1><span>I’m Sameed Imad,</span> a passionate full-stack developer.</h1>
            <p>
                BTech student at RGUKT Basar building web applications with JavaScript,
                React, and MERN stack, while strengthening DSA and problem-solving skills.
            </p>
            <div className="hero-action">
                <AnchorLink className='anchor-link' offset={50} href='#contact'><div className='hero-connect' onClick={()=>setMenu("contact")}>Connect with me</div></AnchorLink>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero
