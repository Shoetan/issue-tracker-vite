
const express = require('express')
const cors = require('cors')
const port = 8080
require('dotenv').config()



const app = express()


app.get('/', (req, res) => {res.json('hello')})

app.listen(port, () => { console.log(`Listening on port : ${port}`) })