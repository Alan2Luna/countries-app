import { MoonIcon } from '../assets/icons/MoonIcon'
import Styles from '../styles/button.module.css'

export function Button() {
    return(
        <button className={ Styles["header__button"]}>
            <MoonIcon />
            <span className={ Styles["header__text_button"]}>dark mode</span>
        </button>
    )
}