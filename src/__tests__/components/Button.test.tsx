import { render, screen } from '@testing-library/react'
import { Button } from '../../components/Button'

describe('<Button />', () => {
    it('Should a button exists', () => {

        render( <Button /> )

        expect(screen.getByRole('button')).toBeInTheDocument()

    })

    it('it should have text "dark mode"', () => {
        // arrange
        render( <Button /> )
        // act
        const button = screen.getByText(/dark mode/i)
        // assertion
        expect( button ).toBeInTheDocument()
    })
})