export async function getCountries() {

    const response = await fetch('https://restcountries.com/v3.1/all')

    if(!response.ok) {
        const message = `An error has ocurred: ${ response.status }`
        throw new Error( message )
    }

    const data = await response.json()

    return data

}