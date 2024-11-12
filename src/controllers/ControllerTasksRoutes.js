const { fetchDuckDuckResults, fetchDuckDuckSuggestions } = require('../api/duckDuckAPI')

module.exports = class TaskController{
    static async getSearchData(req, res){
        const query = req.query.q
        if(!query){
            return res.status(400).json({error: 'The "q" parameter is required'})
        }
        try{
            const results = await fetchDuckDuckResults(query)
            res.status(200).json(results)
        }catch (error){
            res.status(500).json({error: `something went wrong: ${error}`})
        }
    }
    static async getSuggestionData(req, res){
        const query = req.query.q
        if(!query){
            return res.status(400).json({error: 'The "q" parameter is required'})
        }
        try{
            const results = await fetchDuckDuckSuggestions(query)
            res.status(200).json(results)
        }catch (error){
            res.status(500).json({error: `something went wrong: ${error}`})
        }
    }
    static async postSearchData(req, res){
        const query = req.body.query
        if(!query){
            return res.status(400).json({error: 'The "query" parameter is required'})
        }
        try{
            const results = await fetchDuckDuckResults(query)
            res.status(200).json(results)
        }catch (error){
            res.status(500).json({error: `something went wrong: ${error}`})
        }
    }
}