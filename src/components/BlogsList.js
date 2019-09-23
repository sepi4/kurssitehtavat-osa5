import React from 'react'

import Blog from './Blog'

const BlogsList = ({blogs, handleLike}) => {

  const sortedBlogs = blogs.sort((a, b) => -(a.likes - b.likes))

  return blogs.length > 0 
    ? 
      <ul>{sortedBlogs.map(
        blog => <li key={blog.id}>
          <Blog 
            blog={blog} 
            handleLike={handleLike}
          />
        </li>)}
      </ul>
    : 
    null
}


export default BlogsList
