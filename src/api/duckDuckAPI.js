const axios = require('axios')

const fetchDuckDuckResults = async (query) =>{
    const api = `https://api.duckduckgo.com`

    try{
        const response = await axios.get(api, {
            params:{
                q: query,
                format: 'json'
            }})
        return response.data.RelatedTopics.map(item => ({
                title: item.Text,
                url: item.FirstURL
            }))
    }catch (error){
        throw new Error(`something went wrong: ${error}`)
    }
}
const fetchDuckDuckSuggestions = async (query) =>{
    const api = `https://api.duckduckgo.com/ac`

    try{
        const response = await axios.get(api, {
            params:{
                q: query,
                format: 'json'
            }})
        return response.data.map(item => ({
                suggestion: item.phrase
            }))
    }catch (error){
        throw new Error(`something went wrong: ${error}`)
    }
}
module.exports = {
    fetchDuckDuckResults,
    fetchDuckDuckSuggestions
}