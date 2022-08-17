import axios from 'axios'

export function useApi(){
    //Bing background - Utilizando API externa que realiza a mesma chamada para evitar erro com CORS.
    async function getBackground(){
        return await axios.get('https://bing.biturl.top/?resolution=1920&format=json&index=0&mkt=en-US').then(
            (result) => {
                console.log(result.data.url)
                return result.data.url
            }
        ).catch(
            err=>console.log(err)
        )
    }

    return { getBackground }
}