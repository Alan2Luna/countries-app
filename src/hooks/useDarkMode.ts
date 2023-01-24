import { useState, useEffect, useLayoutEffect } from 'react'

export function useDarkMode() {

    const [ isDarkMode, setIsDarkMode ] = useState(false)
    
    const toggleTheme = () => (setIsDarkMode( prevState => !prevState ))

    useLayoutEffect(() => {
        
        const elementRoot = document.getElementById('root')
        const themeLocal = localStorage.getItem('theme')

        if ( window.matchMedia('(prefers-color-scheme)').media !== 'not all' ) {

            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

            if ( !themeLocal ) {

                if( isDark ) {
                    localStorage.setItem('theme', 'dark');
                    elementRoot!.dataset.theme = 'dark'
                    setIsDarkMode(true)
                }

            }

            if( themeLocal === 'dark' ) {
                elementRoot!.dataset.theme = 'dark'
                setIsDarkMode(true)
            }
      
        } else {

          if( themeLocal === 'dark' ) {
            elementRoot!.dataset.theme = 'dark'
            setIsDarkMode(true)
          }
 
        }

    }, [])

    useEffect(() => {
        const elementRoot = document.getElementById('root')

        if( elementRoot!.dataset.theme && !isDarkMode) {
            elementRoot!.removeAttribute('data-theme')
            window.localStorage.setItem('theme', 'light')
        }

        if(!elementRoot!.dataset.theme && isDarkMode) {
            elementRoot!.dataset.theme = 'dark'
            window.localStorage.setItem('theme', 'dark')
        }
    }, [ isDarkMode ])

    return{
        isDarkMode,
        toggleTheme
    }
}