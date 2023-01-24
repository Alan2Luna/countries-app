import Styles from '../styles/components/loader.module.css'

export function Loader() {
    return(
        <div className={ Styles["lds-ring"] }>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}