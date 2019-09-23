import React, { useState } from 'react'
import blogService from '../services/blogs'  

const CreateNewBlog = ({ user, addNewBlog }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreateBlog = async e => {
    e.preventDefault()
    const newBlogObject = { title, author, url }
    const b = await blogService.createBlog(user.token, newBlogObject)
    setTitle('')
    setAuthor('')
    setUrl('')
    console.log(b)
    addNewBlog(b)
  }

  return <div>
    <form onSubmit={handleCreateBlog}>
      <h2>Create new blog</h2>
      <div>
        title:
        <input 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="title"
        />
      </div>
      <div>
        author
        <input 
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          name="author"
        />
      </div>
      <div>
        url
        <input 
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          name="url"
        />
      </div>
      <div>
        <input type="submit" value="create" />
      </div>
    </form>

  </div>
}

export default CreateNewBlog
