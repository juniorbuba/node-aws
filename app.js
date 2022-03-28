const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('YO!, I am running on AWS baby')
})

app.get('/test', (req, res) => {
    res.send('YO!, I am running on AWS, baby test')
})

app.listen(PORT, () => {
    console.log('Up and running on port 3000')
})