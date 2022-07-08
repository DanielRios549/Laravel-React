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
        render(
            <Card name="card"></Card>
        )

        const element = screen.getByRole('article')

        expect(element).toBeInTheDocument()
        expect(element).not.toContainHTML('svg')
    })

    test('Card with Icon Available', () => {
        render(
            <Card name="users"></Card>
        )

        const element = screen.getByRole('article')

        expect(element).toBeInTheDocument()
        expect(element).toContainHTML('svg')
    })
})
