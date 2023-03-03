export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = getQuery(event)

    // // handle post data
    // const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=d3LtuPebuuuV5e2bGxQQjtZwfDRFKjAKC6gTKurL')

    return data
})