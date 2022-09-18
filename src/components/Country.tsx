import Styles from '../styles/components/country.module.css'

type Props = {
    name: string;
    flag: string;
    population: string;
    region: string;
    capital: string;
}

export function Country({ name, flag, population, region, capital }: Props) {
    return(
        <li className={ Styles.country } data-testid="country">
            <div className={ Styles['country__flag_container'] }>
                <img 
                    className={ Styles['country__flag'] }
                    src={ flag } 
                    alt={ `flag of ${ name }` } 
                />
            </div>
            <div className={ Styles['country__description'] }>
                <h2 className={ Styles['country__name'] }>{ name }</h2>
                <div className="country__info_line">
                    <span className={ Styles['country__info'] }>population: </span>
                    <span className={ Styles['country__data'] } data-testid="country_name">{ population }</span>
                </div>
                <div className="country__info_line">
                    <span className={ Styles['country__info'] }>region: </span>
                    <span className={ Styles['country__data'] } data-testid="country_region">{ region }</span>
                </div>
                <div className="country__info_line">
                    <span className={ Styles['country__info'] }>capital: </span>
                    <span className={ Styles['country__data'] } data-testid="country_capital">{ capital }</span>
                </div>
            </div>
        </li>
    )
}