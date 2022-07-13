/**
 * @jest-environment jsdom
 */

import { render, screen, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Form from '.'

const onSubmit = jest.fn((event) => event.prentDefault())
const id = 'Form-01'

const setup = () => {
    return render(
        <Form action="#" testid={id} name={id} submit={onSubmit}>
            <label htmlFor="input01">Input01</label>
            <input type="text" placeholder="Input 01" id="input01" name="input01"/>
        </Form>
    )
}

const text = () => 'Text of Test'
const form = () => screen.getByTestId(id)
const input = () => screen.getByRole('textbox', { name: /input01/i })
const submit = () => within(form()).getByText(id)

beforeEach(async () => {
    onSubmit.mockClear()
})

// TODO: Move mocks to its own files

// jest.mock(...zustandDefaultMock())
// jest.mock(...useConfigMock())
// jest.mock(...usePageMock({ url: '/login' }))

jest.mock('zustand', () => ({
    __esModule: true,
    ...jest.requireActual('zustand'),
    default: () => {}
}))

jest.mock('$/stores/config', () => ({
    __esModule: true,
    ...jest.requireActual('$/stores/config'),
    useConfig: (config: any) => ({
        config: {
            appName: 'JestTest',
            lang: 'en',
            user: undefined,
            message: {
                form: null,
                success: null,
                error: null
            },
            theme: 'light'
        }
    })
}))

jest.mock('@inertiajs/inertia-react', () => ({
    __esModule: true,
    ...jest.requireActual('@inertiajs/inertia-react'),
    usePage: () => ({
        url: '/login'
    })
}))

describe('Form Component', () => {
    test('Display Form', () => {
        setup()

        expect(form()).toBeInTheDocument()
        expect(form()).toContainElement(input())
        expect(submit()).toBeInTheDocument()
    })

    test('Form Submit', () => {
        setup()

        user.type(input(), text())
        user.click(submit())

        // TODO: Fix Submit not been called

        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith({ input: text })
    })
})
