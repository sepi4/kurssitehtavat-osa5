import React from 'react'

import Notification from './Notification'

const LoginForm = ({
  message,
  username,
  password,
  setUsername,
  setPassword,
  handleLogin
}) => {
  return (
    <div >
      <form onSubmit={handleLogin}>
        <h1>log in to application</h1>
        <Notification message={message} />
        <div>
          username
          <input
            value={username}
            onChange={setUsername}
            type="text"
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
