import { useRef } from 'react'
import { Flag } from './Flag';
import { Country as ICountry } from '../interfaces/Country';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { Link } from "react-router-dom"

import Styles from '../styles/components/country.module.css'

export function Country(country: ICountry) {

    const elementRoot = useRef<HTMLLIElement | null>(null)
    const isView = useIntersectionObserver( elementRoot )
    
    return(
        <Link to={`/${country.name.common}`}>
            <li ref={ elementRoot } className={ Styles.country } data-testid="country">
                <div className={ Styles['country__flag_container'] }>
                    <Flag 
                        className={ Styles['country__flag'] }
                        src={ country.flags.png }
                        alt={ `flag of ${ country.name.common }` } 
                        isView={ isView }
                    />
                </div>
                <div className={ Styles['country__description'] }>
                    <h2 className={ Styles['country__name'] }>{ country.name.common }</h2>
                    <div className={ Styles["country__info_line"] }>
                        <span className={ Styles['country__info'] }>population: </span>
                        <span className={ Styles['country__data'] }>{ country.population }</span>
                    </div>
                    <div className={ Styles["country__info_line"] }>
                        <span className={ Styles['country__info'] }>region: </span>
                        <span className={ Styles['country__data'] }>{ country.region }</span>
                    </div>
                    <div className={ Styles["country__info_line"] }>
                        <span className={ Styles['country__info'] }>capital: </span>
                        <span className={ Styles['country__data'] }>{ country.capital ? country.capital[0] : 'none'}</span>
                    </div>
                </div>
            </li>
        </Link>
    )

}