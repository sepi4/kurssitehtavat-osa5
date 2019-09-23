import React, { useState } from 'react'
const Blog = ({ blog, handleLike }) => {
  const [showAll, setShowAll] = useState(false)

  const divStyle = {
    backgroundColor: "#E0E0E0",
    padding: "1px 15px",
    margin: "10px 0",
  }
  return (
    <div>

      {showAll 
          ? 
            <div style={divStyle}>
              <h2 style={{cursor: "pointer"}} onClick={() => {
                setShowAll(!showAll)
              }}>
                {blog.title}
              </h2>
              <p>author: {blog.author}</p>
              <p>added by: {blog.user.name ? blog.user.name : blog.user.username}</p>
              <p>url: <a href={blog.url}>{blog.url}</a></p>
              <p>likes: {blog.likes} 
                <button 
                  onClick={() => { handleLike(blog) }}
                >
                  like
                </button>
              </p>
            </div>
          :
            <div>
              <p 
                style={{cursor: "pointer"}} 
                onClick={() => {
                  setShowAll(!showAll)
                }}
              >
                <strong>{blog.title}</strong>, by {blog.author}
              </p>
            </div>
      }
    </div>
  )
}

export default Blog
