import { Country } from '../../interfaces/Country'
import { State } from './CountriesProvider'

type CountriesActions = 
    | { type: 'getAll', payload: Country[] }
    | { type: 'filteredByName', payload: string }
    | { type: 'filteredByRegion', payload: string }
    | { type: 'searchByName', payload: string }

export function countriesReducer( state: State, action: CountriesActions): State {

    switch(action.type) {

        case 'getAll':
            return {
                ...state,
                isLoading: false,
                countries: action.payload,
                toShow: action.payload
            }

        case 'filteredByName': {

            const { countries, filteredByRegion } = state

            if( !action.payload && filteredByRegion ) {
                return {
                    ...state,
                    filteredByName: '',
                    toShow: countries.filter( country => country.region.toLowerCase().includes( filteredByRegion.toLocaleLowerCase() ))
                }
            }

            if( action.payload && !filteredByRegion ) {
                return {
                    ...state,
                    filteredByName: action.payload.toLocaleLowerCase(),
                    toShow: countries.filter( country => country.name.common.toLowerCase().includes( action.payload.toLocaleLowerCase()))
                }
            }

            if( action.payload && filteredByRegion ) {
                return { 
                    ...state,
                    filteredByName: action.payload.toLowerCase(),
                    toShow: countries
                        .filter( country => country.name.common.toLowerCase().includes( action.payload.toLowerCase()) )
                        .filter( country => country.region.toLowerCase().includes( filteredByRegion.toLocaleLowerCase() ))
                }
            }

            return {
                ...state,
                filteredByName: '',
                toShow: countries
            }
        }

        case 'filteredByRegion': {

            const { countries, filteredByName } = state

            if( action.payload && !filteredByName ) {
                return {
                    ...state,
                    filteredByRegion: action.payload,
                    toShow: countries.filter( country => country.region.toLowerCase().includes( action.payload.toLowerCase()) )
                }
            }

            if( !action.payload && filteredByName ) {
                return {
                    ...state,
                    filteredByRegion: '',
                    toShow: countries.filter( country => country.name.common.toLowerCase().includes( filteredByName ))
                }
            }

            if( action.payload && filteredByName ) {
                return {
                    ...state,
                    filteredByRegion: action.payload,
                    toShow: countries
                        .filter( country => country.name.common.toLowerCase().includes( filteredByName) )
                        .filter( country => country.region.toLowerCase().includes( action.payload.toLowerCase() ))
                }
            }

            return {
                ...state,
                filteredByRegion: '',
                toShow: countries
            }

        }

        case 'searchByName': {
            const { countries } = state

            let searchByName = countries.find( country => country.name.common === action.payload )

            return {
                ...state,
                countryDetail: searchByName
            }

        }

        default:
            return state
    }

}