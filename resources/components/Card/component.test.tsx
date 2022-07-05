/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '.'

afterEach(() => {
    cleanup()
})

describe('Card Component', () => {
    test('Card with no Icon Available', () => {
        const name = 'card'

        render(
            <Card name={name}></Card>
        )

        const element = screen.getByRole('article')

        expect(element).toBeInTheDocument()
        expect(element).not.toContainHTML('svg')
    })

    test('Card with Icon Avaiable', () => {
        const name = 'users'

        render(
            <Card name={name}></Card>
        )

        const element = screen.getByRole('article')

        expect(element).toBeInTheDocument()
        expect(element).toContainHTML('svg')
    })
})
