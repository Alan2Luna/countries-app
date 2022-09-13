import { MoonIcon } from '../assets/icons/MoonIcon'
import Styles from '../styles/components/header.module.css'

export function Header() {
    return(
        <header className={ Styles.header }>
            <div className={ Styles["header__container"] }>
                <h3 className={ Styles["header__title"] }>Where in the world?</h3>

                <button className={ Styles["header__button"]}>
                    <MoonIcon />
                    <span className={ Styles["header__text_button"]}>dark mode</span>
                </button>
            </div>
        </header>
    )
}