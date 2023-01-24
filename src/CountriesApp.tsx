import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './containers/Header'
import { CountriesProvider } from './context/countries/CountriesProvider'
import { Loader } from './components/Loader'
import CountriesPage from './pages/CountriesPage'
import Styles from './styles/pages/countrydetailspage.module.css'

const CountryDetailsPage = lazy(() => import('./pages/CountryDetailsPage'))

export function CountriesApp() {

    return(
        <>
            <Header />
            <CountriesProvider>
                <Suspense fallback={ 
                    <div className={ Styles["loader-container"] }>
                        <Loader />
                    </div> 
                }>
                    <Routes>
                        <Route path='/' element={ <CountriesPage /> } />
                        <Route path='/:country' element={ <CountryDetailsPage /> } /> 
                    </Routes>
                </Suspense>
            </CountriesProvider>
        </>
    )
}