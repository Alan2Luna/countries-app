import { useState, useEffect, FormEvent, ChangeEvent, useContext, } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { SearchIcon } from '../assets/icons/SearchIcon'
import Styles from '../styles/components/searcher.module.css'
import { DispatchersContext } from '../context/countries/CountriesContext'


export function Searcher() {

    const [ searcherValue, setSearcherValue ] = useState('')
    const debouncedValue = useDebounce(searcherValue, 300)
    const { dispatchFilterByName } = useContext( DispatchersContext )
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => (
        e.preventDefault()
    )

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearcherValue(e.target.value) 
    }

    useEffect(() => {
        dispatchFilterByName(searcherValue)
    }, [ debouncedValue ])

    return(
        <form 
            className={ Styles.searcher }
            onSubmit={ handleSubmit }
        >
            <button 
                className={ Styles["searcher__button"] }
            >
                <SearchIcon />
            </button>
            <input 
                type="text"
                className={ Styles["searcher__input"] }
                onChange={ handleOnChange }
                value={ searcherValue }
                placeholder="Search for a country..."
            />
        </form>
    )
}