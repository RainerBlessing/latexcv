import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App Component', () => {
  test('renders the CV Builder heading', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    // Check if the heading is in the document
    const headingElement = screen.getByText(/CV Builder/i)
    expect(headingElement).toBeInTheDocument()

    // Check for the subtitle
    const subtitleElement = screen.getByText(/Create beautiful LaTeX CVs with ease/i)
    expect(subtitleElement).toBeInTheDocument()
  })
})
