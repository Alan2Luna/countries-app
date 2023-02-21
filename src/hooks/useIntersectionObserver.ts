import { useRef, useState, useEffect } from 'react'

export function useIntersection(options: IntersectionObserverInit, once = false) {
    const [ isIntersecting, setIsIntersecting] = useState(false)
    const observer = useRef<IntersectionObserver | null>(null)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver(
            ([entry]) => {
                if(once && isIntersecting) return
                setIsIntersecting(entry.isIntersecting)
            },
            options
        )

        const currentRef = ref.current
        if(currentRef) {
            observer.current.observe(currentRef)
        }

        return () => {
            if( observer.current) {
                observer.current.disconnect()
            }
        }
    }, [options])
    
    return {
        isIntersecting, 
        ref
    }
}