const express = require('express')

const app = express()

app.get('/test', () => {
    res.send('YO!, I am running on AWS baby')
})

app.listen(3000, () => {
    console.log('Up and running on port 3000')
})