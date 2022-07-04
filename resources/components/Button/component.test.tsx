/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'

afterEach(() => {
    cleanup()
})

describe('Button Component', () => {
    const name = 'Button'

    render(
        <Button type="link" link="/link">
            {name}
        </Button>
    )

    const button = screen.getByText(name)

    test('Button Rendering', () => {
        expect(button).toBeInTheDocument()
    })

    test('Button Text', () => {
        expect(button).toHaveTextContent(name)
    })

    test('Button Class', () => {
        expect(button).toBe(1)
    })
})
