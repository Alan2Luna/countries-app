import { useState,ReactNode } from 'react'
import { ArrowDown } from '../../assets/icons/ArrowDown'
import Styles from '../../styles/components/filter/select.module.css'

type Props = {
    children: ReactNode | ReactNode[]; 
    title: string;
    value: string;
    initialValue: string;
    isOpen: boolean;
    handleToggle: () => void;
}

export function Select({ children, title, value, initialValue, isOpen, handleToggle }: Props ) {

    return(
        <div className={ Styles.select }>
            <button className={ Styles.button } onClick={ handleToggle }>
                <span className={ Styles["button__title"] }>{ value !== initialValue ? value : title }</span>
                <ArrowDown />
            </button>
            {
                isOpen && 
                    <div className={ Styles["container__option"]}>
                        { children }
                    </div>
            }
        </div>
    )
}