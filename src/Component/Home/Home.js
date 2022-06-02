import React from 'react';
import './Home.css';
// import Footer  from "E:\nce-app\src\Component\Footer\Footer.js";

function About() {
    return (
        <>
            <div className="about">
           
                <img src={'./assest/Home.webp'} alt="" />
                <div className="about_detail">
                    <p>About</p>
                    <p>New coding era help you to improving coding skill with Real World Application Project.</p>
                </div>
            </div>

            <div className="youtube_section">
                <p>Our Youtube Channel</p>

                <div className="youtube_part">
                    <div className="youtube_detail">
                        <p>Our Codes are available in video format with the help of Youtube.</p>
                        <button> <a href="https://www.youtube.com/channel/UCuESxsGfJB3rrfwGuX5CVgQ" target={'blank'}> Subscribe </a></button>
                    </div>
                    <img src="./assest/For gif/YTGIF.gif" alt="" />
                </div>
            </div>

            <div className="Blog_section">
                <p>Blog</p>
                <div className="blog_part">
                    <img src="./assest/For gif/blogjf.gif" alt="" />
                    <p>Source code of Every video is available through our blogs.</p>
                </div>
            </div>
          
        </>
    )
}

export default About