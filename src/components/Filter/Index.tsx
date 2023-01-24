import { useState, ChangeEvent, useContext } from 'react'
import { Select } from './Select'
import { Option } from './Option'
import { DispatchersContext } from '../../context/countries/CountriesContext';

type Props = {
    options: string[];
    initialValue: string;
    title: string;
}

export function Filter({ options, initialValue, title }: Props) {

    const [ value, setValue ] = useState( initialValue )
    const [ isOpen, setIsOpen ] = useState(false)
    const { dispatchFilterByRegion } = useContext( DispatchersContext )

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue( e.target.value )
        setIsOpen( false )
        dispatchFilterByRegion( e.target.value == 'All' ? '' : e.target.value )
    }

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState)
    }

    return(
        <Select 
            value={ value }
            initialValue={ initialValue }
            title={ title }
            isOpen={ isOpen }
            handleToggle={ handleToggle }
        >
            {
                options.map( option => <Option key={ option }  handleChange={handleChange} option={ option } /> )
            }

        </Select>
    )
}