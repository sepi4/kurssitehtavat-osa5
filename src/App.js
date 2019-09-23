import React, { useState, useEffect } from 'react'
import loginService from './services/login'  
import blogService from './services/blogs'  

import Blog from './components/Blog'
import CreateNewBlog from './components/CreateNewBlog'

const App = () =>  {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

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
      console.log(exception)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const loginForm = () => {
    return <form onSubmit={handleLogin}>
      <h1>log in to application</h1>
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
        <CreateNewBlog 
          user={user}
          addNewBlog={newBlog => { setBlogs(blogs.concat(newBlog))}}
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
