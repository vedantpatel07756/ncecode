import React,{useState} from 'react';
import Blog_container from './Blog_container';
import './Blog.css';
import BlogApi from './BlogApi';

const Blog = () => {

  const [BlogData, setBlogdata] = useState(BlogApi);
  return (
    <>
      <div className="banner">
        <img src="./assest/logo_4.png" alt="" />
      </div>

      <div className="Blog_1">
          <p className="A">Blog</p>
        
          
          <div className="Blog_section_1">
        <Blog_container BlogData={BlogData} />
        {/* <Blog_container/>
        <Blog_container/>
        <Blog_container/>
        <Blog_container/>
        <Blog_container/> */}
        </div>

     </div>
     
      
    </>
    
  )
}

export default Blog