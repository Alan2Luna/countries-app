import { createContext } from 'react'
import { State } from './CountriesProvider'
import { Country } from '../../interfaces/Country'


type DispatchersContextProps = {
    dispatchGetAll: ( payload: Country[] ) => void;
    dispatchFilterByRegion: ( payload: string ) => void;
    dispatchFilterByName: ( payload: string ) => void;
    dispatchSearchByName: ( payload: string ) => void;
}

export const CountriesContext = createContext<State>({} as State)
export const DispatchersContext = createContext<DispatchersContextProps>({} as DispatchersContextProps)