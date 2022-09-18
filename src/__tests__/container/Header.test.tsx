import { render, screen } from '@testing-library/react'
import { Header } from '../../containers/Header'

describe('Header', () => {

    /*
    afterEach(cleanup)
    afterEach(jest.clearAllMocks)
    beforeAll( () => {
        render( <Header /> )
    }) 
    */

    /*
    it('should render correctly', () => {
        const header = render(<Header />)
        expect( header ).toBeTruthy()
    })
    */

    it('should a heading exists at the screen', () => {

        //  ARRANGE
        render( <Header /> )

        //  ACT
        const textHeading = screen.getByText(/Where in the world?/i)

        //  ASSERT
        expect(textHeading).toBeInTheDocument()
    
    })

})