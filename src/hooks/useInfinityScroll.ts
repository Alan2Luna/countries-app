import { useState, useEffect } from "react"
import { Country } from "../interfaces/Country"

type Props = {
    countries: Country[];
    isIntersecting: boolean;
}

export function useInfinityScroll({ countries, isIntersecting }: Props): [Country[], boolean] {

    const [ items, setItems ] = useState<Country[]>([] as Country[])
    const [ pageNumber, setPageNumber ] = useState(0)
    const [ scrollFinish, setScrollFinish ] = useState(false)

    useEffect(() => {

        if(!isIntersecting) return
        setPageNumber( prevState => prevState + 1)

    }, [isIntersecting])

    useEffect(() => {
        const itemsPerPage = 50
        const startIndex = (pageNumber - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        if(endIndex > countries.length) {
            setItems([...items, ...countries.slice(startIndex)])
            setScrollFinish(true)
        } else {
            setItems([...items, ...countries.slice(startIndex, endIndex)])
        }

    }, [pageNumber])

    useEffect(() => {
        setItems([])
        setPageNumber(0)
        setScrollFinish(false)

    }, [countries])
    
    return [
        items,
        scrollFinish
    ]
}