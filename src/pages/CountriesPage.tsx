import { ListOfCountries } from '../containers/ListOfCountries'
import { Searcher, Filter } from '../components/'

import Styles from '../styles/pages/countriespage.module.css'


function CountriesPage() {
    
    const options = ["All", "Africa", "America", "Asia", "Europe", "Oceania"]
    
    return(
        <section className={ Styles["countries__container"] }>
            <header className={ Styles["filters__header"] }>
                <div className={ Styles["filters__container"]}> 
                    <Searcher />
                    <Filter 
                        title="Filter by Region"
                        initialValue="All"
                        options={ options }
                    />
                </div>
            </header>
            <ListOfCountries />
        </section>
    )
}

export default CountriesPage