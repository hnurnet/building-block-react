import React from 'react'
import "../styles.css";
import { Link } from 'react-router-dom';


function Post({blog, key}) {
    
  return (
    <Link to={`/read/${blog.id}`} className='post-link'>
    <div className='blog'>
        <img src={blog.thumbnail} alt='img' className='blog-image'/>
        <div className='blog-title'>
           <h2> {blog.title}</h2>
            <p>{blog.description}</p>
        </div>
    </div>
    </Link>
  )
}

export default Post
