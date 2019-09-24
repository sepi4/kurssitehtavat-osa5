
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
  const blog={
    title: 'Simple blog title',
    author: 'Sergei',
    likes: 0,
  }
  const onClick = () => {
    console.log('click')
  }

  const component = render(
    <SimpleBlog
      blog={blog}
      onClick={onClick}
    />
  )


  expect(component.container).toHaveTextContent(
    `${blog.title} ${blog.author}`
  )
  expect(component.container).toHaveTextContent(
    `blog has ${blog.likes} likes`
  )
})
