import { useEffect, useState, useContext } from "react"
import { Link, useParams } from "react-router-dom";
import { DispatchersContext, CountriesContext } from '../context/countries/CountriesContext'
import { Loader } from "../components/"
import { COUNTRY_CODES } from "../utils/countryCodes"
import Styles from '../styles/pages/countrydetailspage.module.css'

function CountryDetailsPage() {

    const [ isLoading, setIsLoading ] = useState(true);
    const { dispatchSearchByName } = useContext( DispatchersContext )
    const { countryDetail } = useContext( CountriesContext )
    const { country } = useParams()

    useEffect(() => {
        dispatchSearchByName(country!)
        setIsLoading(false)
    }, [])

    if( isLoading ) {
        return(
            <div className={ Styles["loader-container"] }>
                <Loader />
            </div>
        )
    }
    return(
        <section className={ Styles["country-details__section"] }>
            <Link to="/" className={ Styles.button }>back</Link>
            <div className={ Styles["country-detail"] }>
                <div className={ Styles["country-details__flag-container"] }>
                    <img className={ Styles["country-details__flag"] } src={ countryDetail?.flags.svg } alt="" />
                </div>
                <div className={ Styles["country-details"] }>
                    <h2 className={ Styles["country-details__name"] }>{ countryDetail?.name.common}</h2>
                    <div className={ Styles["country-details__list-container"] }>
                        <ul className={ Styles["country-details__list"] }>
                            <li className={ Styles["country-details__item"] }>
                                Native name: <span>{ Object.values(countryDetail!.name.nativeName)[0].common}
                                </span>
                            </li>
                            <li className={ Styles["country-details__item"] }>
                                Population: <span>{ countryDetail?.population.toLocaleString('en-US') }</span>
                            </li>
                            <li className={ Styles["country-details__item"] }>
                                Region: <span>{ countryDetail?.region }</span>
                            </li>
                            <li className={ Styles["country-details__item"] }>
                                Sub Region: <span>{ countryDetail?.subregion }</span>
                            </li>
                            <li className={ Styles["country-details__item"] }>
                                Capital: <span>{ countryDetail?.capital }</span>
                            </li>
                        </ul>
                        <ul className={ Styles["country-details__list"] }>
                            <li className={ Styles["country-details__item"] }>
                                Top Level Domain: <span>{ countryDetail?.tld[0] }</span>
                            </li>
                            <li className={ Styles["country-details__item"] }>
                                Currencies: <span>
                                {   
                                    countryDetail!.currencies 
                                        ? Object.values(countryDetail!.currencies)[0].name
                                        : 'Not Available'
                                }
                                </span>
                            </li>
                            <li className={ Styles["country-details__item"] }>
                                Languages:
                                {
                                    Object.values(countryDetail!.languages).map((language, index) => {
                                        
                                        if(Object.values(countryDetail!.languages).length === (index + 1)) {
                                            return(<span key={language}> {language}</span>)
                                        }

                                        return(<span key={language}> {language},</span>)
                                    })
                                }
                            </li>
                        </ul>
                        <div className={ Styles["country-details__borders"] }>
                            <p className={ Styles["country-details__item"] }>Border Countries:</p>
                            {
                                countryDetail?.borders
                                    ? (
                                        <ul className={ Styles["country-details__border-list"] }>
                                            {
                                                countryDetail.borders.map( border => {

                                                    const indexOfCountry = Object.keys(COUNTRY_CODES).indexOf(border)

                                                    return(
                                                        <li 
                                                            className={ Styles["country-details__border"] }
                                                            key={border}
                                                        >
                                                            {Object.entries(COUNTRY_CODES)[indexOfCountry][1]}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                    : <span className={Styles["country-details__item-error"]}>Not available</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountryDetailsPage