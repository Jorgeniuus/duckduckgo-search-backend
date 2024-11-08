const express = require('express')
const cors = require('cors')

const axios = require('axios')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/search', async (req, res) =>{
    const query = req.query.q
    if(!query){
        return res.status(400).json({error: 'The "q" parameter is required'})
    }
    try{
        const api = `https://api.duckduckgo.com/?q=${query}&format=json`
        const response = await axios.get(api, {
            params:{
                q: query,
                format: 'json'
            }
        })
        res.json(response.data.RelatedTopics.map(item => ({
                title: item.Text,
                url: item.FirstURL
            }
        )))
    }catch (error){
        res.status(500).json({error: 'something went wrong!'})
    }
})

module.exports = app