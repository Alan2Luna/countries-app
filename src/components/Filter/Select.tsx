import { useContext } from 'react'

import { FilterContext } from './Index'
import { Option } from './Option'

import { ArrowDown } from '../../assets/icons/ArrowDown'
import Styles from '../../styles/components/filter/select.module.css'

export function Select() {
    const { title, state, isOpen, options, handleToggle } = useContext(FilterContext)

    return(
        <div className={ Styles.select }>
            <button className={ Styles.button } onClick={ handleToggle }>
                <span className={ Styles["button__title"] }>{ state || title}</span>
                <ArrowDown />
            </button>
            {
                isOpen && 
                    <div className={ Styles["container__option"]}>
                        {
                            options!.map( option => <Option key={option} option={option} />)
                        }
                    </div>
            }
        </div>
    )
}