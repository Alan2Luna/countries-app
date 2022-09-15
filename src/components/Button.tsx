import { MoonIcon } from '../assets/icons/MoonIcon'
import Styles from '../styles/components/button.module.css'

export function Button() {
    return(
        <button className={ Styles["button"]}>
            <MoonIcon />
            <span className={ Styles["text_button"]}>dark mode</span>
        </button>
    )
}