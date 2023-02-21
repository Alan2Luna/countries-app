import { useContext } from 'react'

import { CountriesContext, DispatchersContext } from '../context/countries/CountriesContext'
import { ListOfCountries } from '../containers/ListOfCountries'
import { Searcher, Filter } from '../components/'

import Styles from '../styles/pages/countriespage.module.css'


function CountriesPage() {
    
    const options = ["All", "Africa", "America", "Asia", "Europe", "Oceania"]
    const { filteredByRegion } = useContext(CountriesContext)
    const { dispatchFilterByRegion } = useContext(DispatchersContext)
    
    return(
        <section className={ Styles["countries__container"] }>
            <header className={ Styles["filters__header"] }>
                <div className={ Styles["filters__container"]}> 
                    <Searcher />
                    <Filter 
                        title="Filter by Region"
                        options={ options }
                        value={ filteredByRegion }
                        onChange={ dispatchFilterByRegion }
                    />
                </div>
            </header>
            <ListOfCountries />
        </section>
    )
}

export default CountriesPage