import React from 'react';
import './Footer.css'



const Footer = () => {
  return (
    <>
        <div className="Footer">
            <p>New Coding Era</p>
            
            <p>New Coding Era is a Youtube Channel as well as a Blog Website You can practice  </p> 
           <p> your Skill with real world Project. You can Contact us with our </p>
                  <p>  Contact Page, Also through Social media handle.</p>


            
            <div className="icon">
           <a href="https://www.facebook.com/profile.php?id=100079912337823" target="blank"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/newcodingera/" target="blank"> <i class="fa-brands fa-instagram-square"></i></a> 
          <a href="https://www.youtube.com/channel/UCuESxsGfJB3rrfwGuX5CVgQ"target="blank">  <i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.linkedin.com/in/vedant-patel-47707b210/" target="blank">  <i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.pinterest.se/newcodingera/_created/" target="blank">  <i class="fa-brands fa-pinterest"></i></a>

            </div>

            <hr />

            <p className="CopyRight">Copyright @2022-NewCodingEra</p>
        </div>
    </>
  )
}

export default Footer