import { useState, useEffect, RefObject } from 'react'

export function useIntersectionObserver( elementRoot: RefObject<Element>, once: Boolean = true) {

    const [ isView, setIsView ] = useState(false)
    const target = elementRoot?.current
    
    useEffect(() => {

        const onChange: IntersectionObserverCallback = ( entries ) => {

            const el = entries[0]
            
            if(el.isIntersecting) {
                setIsView(true)
                if( !target ) return 
                once && observer.disconnect()
            } else {
                !once && (false)
            }

        }

        const observer = new IntersectionObserver( onChange, {
            rootMargin: '100px'
        })

        if( !target ) return 
        observer.observe( target )

        return () => observer.disconnect()

    })

    return isView
    
}