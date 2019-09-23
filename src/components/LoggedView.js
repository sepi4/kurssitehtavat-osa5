import React from 'react'

import Notification from './Notification'
import Blog from './Blog'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'

const LoggedView = ({
  blogs, 
  user, 
  handleLogout, 
  handleAddNewBlog, 
  handleLike,
  message
}) => {
  const blogsList = blogs.length > 0 
    ? 
      <ul>{blogs.map(
        blog => <li key={blog.id}>
          <Blog 
            blog={blog} 
            handleLike={handleLike}
          />
        </li>)}
      </ul>
    : 
      null


  return (
    <div>
      <h1>Blogs</h1>
      <p>{user.name} is logged in
        <button onClick={handleLogout}>logout</button>
      </p>
      <Notification message={message} />
      <Togglable buttonLabel="new blog">
        <CreateNewBlog 
          user={user}
          addNewBlog={handleAddNewBlog}
        />
      </Togglable>
      {blogsList}
    </div>
  )
}


export default LoggedView
