import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mydata from '../../assets/mywork_data'
const MyWork = () => {
  return (
    <div id="work" className="mywork">
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img className="theme" src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mydata.map((work, index) => (
                <div className="work-card" key={index}>
                    <img src={work.w_img} alt="project" />
                    <div className="overlay">
                        <a href="https://project-web-application-baqo.onrender.com/listings" target="_blank" rel="noreferrer" className="btn live">Live</a>
                        <a href="https://github.com/SameedImad/WanderLust-Full-Stack-Travel-Listing-Web-Application" target="_blank" rel="noreferrer" className="btn demo">Code</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyWork
