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
    test('Link with URL', () => {
        const name = 'Link'

        render(
            <Button type="link" link="/link">
                {name}
            </Button>
        )

        const link = screen.getByRole('link')

        expect(link).toBeInTheDocument()
        expect(link).toHaveTextContent(name)
        expect(link).toHaveAttribute('href')

        // TODO: Fix class assert using CSS Modules
        // expect(link).toHaveClass('button')
    })

    test('Link with no URL', () => {
        const name = 'Empty'

        render(
            <Button type="link">
                {name}
            </Button>
        )

        expect(screen.getByText(name)).toHaveAttribute('href')
    })
})

describe('Button Component as a Button', () => {
    test('Submit Button', () => {
        const name = 'Button'

        render(
            <Button type="submit">
                {name}
            </Button>
        )

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(name)
        expect(button).not.toHaveAttribute('href')
    })
})
