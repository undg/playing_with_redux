import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe("rendering", () => {
    test('renders h2 title', () => {
        const { getByText } = render(<App />)
        const h2 = getByText(/Number of cakes: /i)
        expect(h2).toBeInTheDocument()
    })

    test('renders Buy cake button', () => {
        const { getByText } = render(<App />)
        const button = getByText(/Buy cake/i)
        expect(button).toBeInTheDocument()
    })

    test('renders delivery button', () => {
        const { getByText } = render(<App />)
        const button = getByText(/Delivery cakes/i)
        expect(button).toBeInTheDocument()
    })
    describe('click buttons', () => {
        test('buying cakes', () => {
            const { getByText } = render(<App />)
            const button = getByText(/Buy cake/i)
            button.click()
            const h2 = getByText(/Number of cakes: 8/i)
            expect(h2).toBeInTheDocument()
        })
        test('delivery 10 new cakes', () => {
            const { getByText } = render(<App />)
            const button = getByText(/Delivery cakes/i)
            button.click()
            const h2 = getByText(/Number of cakes: 18/i)
            expect(h2).toBeInTheDocument()
        })
    })
})




describe("rendering redux-hooks", () => {
    test('renders h2 title', () => {
        const { getByText } = render(<App />)
        const h2 = getByText(/Number of hook cakes: /i)
        expect(h2).toBeInTheDocument()
    })
    test('renders Buy cake button', () => {
        const { getByText } = render(<App />)
        const button = getByText(/Buy hook cake/i)
        expect(button).toBeInTheDocument()
    })
    test('renders delivery button', () => {
        const { getByText } = render(<App />)
        const button = getByText(/Delivery hook cakes/i)
        expect(button).toBeInTheDocument()
    })
    describe('click buttons', () => {
        test('buying cakes', () => {
            const { getByText } = render(<App />)
            const button = getByText(/Buy hook cake/i)
            button.click()
            const h2 = getByText(/Number of cakes: 16/i)
            expect(h2).toBeInTheDocument()
        })
        test('delivery 10 new cakes', () => {
            const { getByText } = render(<App />)
            const button = getByText(/Delivery hook cakes/i)
            button.click()
            const h2 = getByText(/Number of hook cakes: 26/i)
            expect(h2).toBeInTheDocument()
        })
    })
})
