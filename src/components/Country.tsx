import Styles from '../styles/components/country.module.css'

export function Country() {
    return(
        <li className={ Styles.country }>
            <div className={ Styles['country__flag_container'] }>
                <img 
                    className={ Styles['country__flag'] }
                    src="https://flagcdn.com/w320/pe.png" 
                    alt="" 
                />
            </div>
            <div className={ Styles['country__description'] }>
                <h2 className={ Styles['country__name'] }>Peru</h2>
                <div className="country__info_line">
                    <span className={ Styles['country__info'] }>population: </span>
                    <span className={ Styles['country__data'] }>32971846</span>
                </div>
                <div className="country__info_line">
                    <span className={ Styles['country__info'] }>region: </span>
                    <span className={ Styles['country__data'] }>Americas</span>
                </div>
                <div className="country__info_line">
                    <span className={ Styles['country__info'] }>capital: </span>
                    <span className={ Styles['country__data'] }>Lima</span>
                </div>
            </div>
        </li>
    )
}