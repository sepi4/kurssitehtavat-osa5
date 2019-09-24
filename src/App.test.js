import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  test('if user is not logged in, login page is open and blogs are not rendered', async () => {
    let component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('login')
    )
    // expect(component.container).toHaveTextContent('login')
    expect(component.container).toHaveTextContent('username')
    expect(component.container).toHaveTextContent('password')
    expect(component.container).toHaveTextContent('log in')

    expect(component.container).not.toHaveTextContent('Blogs')
    expect(component.container).not.toHaveTextContent('logout')
    expect(component.container).not.toHaveTextContent('new blog')

  })
})
