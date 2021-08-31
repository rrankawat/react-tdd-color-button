import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('Changing button color', () => {
  render(<App />)

  // Find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // Click button
  fireEvent.click(colorButton)

  // Expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // Expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
})
