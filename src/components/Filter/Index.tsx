import { useState, ChangeEvent, createContext } from 'react'
import { Select } from './Select'

type Props = {
    options: string[];
    value?: string;
    title: string;
    onChange: (x: string) => void;
}

type State = {
    title: string;
    state: string;
    options?: string[];
    isOpen: boolean;

    handleToggle: () => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterContext = createContext<State>({} as State)

export function Filter({ options, title, value, onChange }: Props) {

    const [ state, setState ] = useState( value || '')
    const [ isOpen, setIsOpen ] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value == 'All' ? '' : e.target.value
        setIsOpen(false)
        setState(value)
        onChange(value)
    }

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState)
    }

    return(
        <FilterContext.Provider value={{
            title, isOpen, state, options,
            handleToggle,
            handleChange
            }}>
            <Select />
        </FilterContext.Provider>
    )
}