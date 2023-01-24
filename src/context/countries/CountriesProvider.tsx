import { useReducer, ReactNode, useEffect, useMemo } from 'react'
import { countriesReducer } from './countriesReducer'
import { CountriesContext, DispatchersContext } from './CountriesContext'
import { Country } from '../../interfaces/Country';
import { getCountries } from '../../services/getCountries'

type Props = {
    children: ReactNode;
}

export type State = {
    countries: Country[] | [];
    filteredByName: string;
    filteredByRegion: string;
    toShow: Country[] | [];
    countryDetail: Country | undefined;
    isLoading: boolean;
}

const INITIAL_STATE: State = {
    countries: [],
    filteredByName: '',
    filteredByRegion: '',
    toShow: [],
    countryDetail: undefined,
    isLoading: true,
}

export function CountriesProvider({ children }: Props) {

    const [ state, dispatch ] = useReducer( countriesReducer, INITIAL_STATE )
    
    const dispatchers = useMemo(() => {

        const dispatchGetAll = ( payload: Country[] ) => {
            dispatch({ type: 'getAll', payload })
        }

        const dispatchFilterByRegion = (payload: string ) => {
            dispatch({ type: 'filteredByRegion', payload })
        }

        const dispatchFilterByName = (payload: string) => {
            dispatch({ type: 'filteredByName', payload })
        }

        const dispatchSearchByName = (payload: string) => {
            dispatch({ type: 'searchByName', payload })
        }

        return {
            dispatchSearchByName,
            dispatchFilterByName,
            dispatchFilterByRegion,
            dispatchGetAll
        }
    }, [])
    
    useEffect(() => {

        const handleFetch = async() => {
            try {
                const data = await getCountries()
                dispatchers.dispatchGetAll( data )
            } catch(err) {
                console.log(err)
            }
        }

        handleFetch()

    }, [])

    return(
        <CountriesContext.Provider value={{ ...state }}>
            <DispatchersContext.Provider value={ dispatchers }>
                { children }
            </DispatchersContext.Provider>
        </CountriesContext.Provider>
    )
}