import React, { useState, useEffect } from 'react'
import loginService from './services/login'  
import blogService from './services/blogs'  

import Blog from './components/Blog'
import CreateNewBlog from './components/CreateNewBlog'
import Notification from './components/Notification'

import './index.css'

const App = () =>  {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJson) {
      const user = JSON.parse(loggedUserJson)
      setUser(user)
    }

    blogService
      .getAll()
      .then(bs => setBlogs(bs))
  }, [])


  const handleLogin = async e => {
    try {
      e.preventDefault()
      const user = await loginService.login({ username , password })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      setUsername('')
      setPassword('')
      setMessage({
        text: 'wrong username or password',
        error: true,
      })
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const handleAddNewBlog = newBlog => { 
    setBlogs(blogs.concat(newBlog))
    setMessage({
      text: `you added new blog '${newBlog.title}', by ${newBlog.author}`,
      error: false,
    })
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  const loginForm = () => {
    return <form onSubmit={handleLogin}>
      <h1>log in to application</h1>
      <Notification message={message} />
      <div>
        username
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        password
        <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="login" />
      </div>
    </form>
  }

  const loggedUserView = () => {
    const blogsArr = blogs.length > 0 
      ? <ul>{blogs.map(blog => <li key={blog.id}><Blog blog={blog} /></li>)}</ul>
      : null

    return (
      <div>
        <h1>Blogs</h1>
        <p>{user.name} is logged in
          <button onClick={handleLogout}>logout</button>
        </p>
        <Notification message={message} />
        <CreateNewBlog 
          user={user}
          addNewBlog={handleAddNewBlog}
        />
        {blogsArr}
      </div>
    )
  }

  return (
    <div>
      {user === null
          ? loginForm()
          : loggedUserView()
      }
    </div>  
  )
}

export default App
