import React from 'react';
import './Blog_container.css';
const Blog_container = ({BlogData}) => {
  // console.log(BlogData); 
  return (
   <>

   {BlogData.map((curElem) =>{
        return(
          <>
            
              <div className="Blog_container" key={curElem.id}>
              <a href={curElem.link} target={'blank'}>
                  <img src="./assest/Section img.png" alt="" />
                  <p>{curElem.Title}</p>
                  <p>{curElem.Detail }</p>
                 </a>
              </div>
              
        </>
        );
   })}
     
   </>
  )
}

export default Blog_container