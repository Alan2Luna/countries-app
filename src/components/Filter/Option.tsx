import { useContext } from 'react'
import { FilterContext } from './Index';

import Styles from '../../styles/components/filter/option.module.css'

type Props = {
    option: string; 
}

export function Option({ option }: Props) {
    const { handleChange } = useContext( FilterContext )

    return(
        <label htmlFor={ option } className={ Styles.option }>
            <input 
                type="radio" 
                id={ option } 
                className={ Styles.input }
                name="region"
                value={ option } 
                onChange={ handleChange }
            />
            { option }
        </label>
    )
}