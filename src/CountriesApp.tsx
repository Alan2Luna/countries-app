import { Header } from './containers/Header'
import { Country } from './components/Country'

export function CountriesApp() {
    return(
        <>
            <Header />
            <div>
                <Country />
            </div>
        </>
    )
}