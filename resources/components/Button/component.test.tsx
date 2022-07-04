/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'

afterEach(() => {
    cleanup()
})

describe('Button Component as a Link', () => {
    const name = 'Button'

    render(
        <Button type="link" link="/link">
            {name}
        </Button>
    )

    const button = screen.getByText(name)

    // console.log(button)

    test('Button Rendering', () => {
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(name)
    })

    test('Button Attributes', () => {
        expect(button).toHaveAttribute('href')
        // expect(button).toHaveClass('button')
    })
})

describe('Button Component as a Button', () => {
    const name = 'Button2'

    render(
        <Button type="submit">
            {name}
        </Button>
    )

    const button = screen.getByText(name)

    test('Button Rendering', () => {
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(name)
    })

    test('Button Attributes', () => {
        expect(button).not.toHaveAttribute('href')
    })
})
