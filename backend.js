
import express from 'express'
import cors from 'cors'
require('dotenv'),config()

const PORT = 8080

const app = express()

app.listen(PORT, () => { console.log('listening on port: ${PORT}')})