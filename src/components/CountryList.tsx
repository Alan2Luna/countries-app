import { Country } from './'
import { Country as ICountry } from '../interfaces/Country'
import { useIntersection } from '../hooks/useIntersectionObserver'
import { useInfinityScroll } from '../hooks/useInfinityScroll'
import Styles from '../styles/components/countrylist.module.css'

type Props = {
    countries: ICountry[];
}

export function CountryList({ countries }: Props ) {
    const { isIntersecting, ref } = useIntersection({
        root: null,
        rootMargin: '200px',
        threshold: 0.5
    })
    const [ items, scrollFinish ] = useInfinityScroll({countries, isIntersecting})

    return(
            <ul className={ Styles["country-list"] }>
                {
                    items.map( country => (
                        <Country key={ `${ country.name.common } ` } { ...country } />
                    ))
                }
                { !scrollFinish && <div ref={ref}></div> }
            </ul>
    )
}