import React from 'react'

import Notification from './Notification'
import CreateNewBlog from './CreateNewBlog'
import Togglable from './Togglable'
import BlogsList from './BlogsList'

const LoggedView = ({
  blogs, 
  user, 
  handleLogout, 
  handleAddNewBlog, 
  handleLike,
  message
}) => {


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
      <BlogsList 
        blogs={blogs}
        handleLike={handleLike}
      />
    </div>
  )
}


export default LoggedView
