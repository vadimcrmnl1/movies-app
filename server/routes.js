const express = require('express')
const router = express.Router()
const needle = require('needle')

//Env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_VALUE = process.env.API_KEY_VALUE


router.get('/', async (req, res) => {
    try {
        const apiRes = await needle('get',`${API_BASE_URL}` )
        const data = apiRes.body
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json('blabla')
    }

})

module.exports = router