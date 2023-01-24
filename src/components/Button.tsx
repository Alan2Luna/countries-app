import { MoonIcon } from '../assets/icons/MoonIcon'
import { MoonWhiteIcon } from '../assets/icons/MoonWhiteIcon'
import Styles from '../styles/components/button.module.css'

import { useDarkMode } from '../hooks/useDarkMode'


export function Button() {

    const { isDarkMode, toggleTheme } = useDarkMode()

    return(
        <button className={ Styles["button"]} onClick={toggleTheme}>
            {
                isDarkMode ? <MoonWhiteIcon />  : <MoonIcon />
            }
            <span className={ Styles["text_button"]}>dark mode</span>
        </button>
    )
}