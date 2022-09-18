import { render, screen } from '@testing-library/react'
import { Country } from '../../components/Country'

describe("Card Component", () => {
    
    const props = {
        flag: "this is a url",
        name: "peru",
        population: "1000",
        region: "america",
        capital: "lima"
    }

    beforeEach(() => {

        render( <Country { ...props } /> )

    })

    it("Should render a country if props present", () => {   

        expect(screen.getByTestId('country')).toBeInTheDocument()

    })

    it("Should have a img", () => {

        const flagImg = screen.getByRole("img")

        expect(flagImg).toHaveAttribute('src', 'this is a url')
        expect(flagImg).toHaveAttribute('alt', 'flag of peru')
    })

    it("Should render data country", () => {

        const population = screen.getByText(/1000/i)
        const region = screen.getByText(/america/i)
        const capital = screen.getByText(/lima/i)

        expect(population).toBeInTheDocument()
        expect(region).toBeInTheDocument()
        expect(capital).toBeInTheDocument()
        
    })

})