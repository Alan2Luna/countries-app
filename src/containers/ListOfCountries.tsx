import { useContext } from 'react'
import { Loader, CountryList } from '../components'
import { CountriesContext } from '../context/countries/CountriesContext'


import Styles from '../styles/containers/listofcountries.module.css'

export function ListOfCountries() {

    const { isLoading, toShow } = useContext( CountriesContext )

    if( isLoading ) {

        return (
            <div className={ Styles["response__container"] }>
                <Loader />
            </div>
        )

    }

    if ( !toShow.length ) {
        return (
            <div className={ Styles["response__container"] }>
                <p className={ Styles["not-found"]}>Not country found</p>
            </div>
        )
    }

    return(
        <CountryList countries={ toShow } />
    )
}