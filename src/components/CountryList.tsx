import { Country } from './'
import { Country as ICountry } from '../interfaces/Country'
import Styles from '../styles/components/countrylist.module.css'

type Props = {
    countries: ICountry[];
}

export function CountryList({ countries }: Props ) {

    return(
            <ul className={ Styles["country-list"] }>
                {
                    countries.map( country => (
                        <Country key={ `this is ${ country.name.common } ` } { ...country } />
                    ))
                }
            </ul>
    )
}