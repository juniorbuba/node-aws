const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('YO!, I am running on AWS baby')
})

app.get('/test', (req, res) => {
    res.send('YO!, I am running on AWS baby')
})

app.listen(3000, () => {
    console.log('Up and running on port 3000')
})