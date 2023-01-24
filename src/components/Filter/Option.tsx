import { ChangeEvent } from 'react'
import Styles from '../../styles/components/filter/option.module.css'

type Props = {
    option: string; 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}

export function Option({ option, handleChange }: Props) {
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