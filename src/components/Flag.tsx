import { ImgHTMLAttributes } from 'react'
import { FlagLoader } from './FlagLoader'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    isView?: boolean
}

export function Flag({ isView, ...props }: Props) {
    
    return(
        <>
            {
                isView
                    ?   <img { ...props } />
                    :   <FlagLoader />
            }
        </>
    )

}