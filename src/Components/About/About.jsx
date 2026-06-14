import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/image.jpg'
import './About.css'
const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img className="theme" src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img className="image-profile" src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate Full Stack Developer who enjoys building complete web applications from frontend to backend.</p>
                    <p>I like turning ideas into real projects and constantly improving my skills by learning new technologies.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><span className="tick">✔</span><p>HTML5 & CSS3</p> <hr style={{width:"70"}}/></div>
                    <div className="about-skill"><span className="tick">✔</span><p>React.js</p> <hr style={{width:"55%"}}/></div>
                    <div className="about-skill"><span className="tick">✔</span><p>JavaScript</p> <hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><span className="tick">✔</span><p>Node.js & Express.js</p> <hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><span className="tick">✔</span><p>C & C++</p> <hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><span className="tick">✔</span><p>Python</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><span className="tick">✔</span><p>MySQL & SQL</p> <hr style={{width:"65%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About