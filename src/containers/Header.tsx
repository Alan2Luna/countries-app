import Styles from '../styles/components/header.module.css'

export function Header() {
    return(
        <header className={ Styles.header }>
            <div className={ Styles["header__container"] }>
                <h3 className={ Styles["header__title"] }>Where in the world?</h3>

                
            </div>
        </header>
    )
}