import { ImgHTMLAttributes, useRef } from 'react'
import { FlagLoader } from './FlagLoader'
import { useIntersection } from '../hooks/useIntersectionObserver'

type Props = ImgHTMLAttributes<HTMLImageElement>

export function Flag({ ...props }: Props) {
    const { isIntersecting, ref } = useIntersection({
        root: null,
        rootMargin: '200px',
        threshold: 0.5
    },
        true
    )

    return(
        <div style={{
            width: '100%',
            height: '100%'
        }} ref={ref}>
            {
                isIntersecting
                    ?   <img { ...props } />
                    :   <FlagLoader />
            }
        </div>
    )

}