import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './UserRoutes/routes.js'



const app = express()


app.use(express.json())
app.use(cors())

//mongo url
dotenv.config()
const uri = process.env.MONGODB_URI

app.use('/', router)

mongoose.connect(uri)
.then(() => {
    app.listen(4001, () => {
        console.log('Connected to database, listening on port 4001')
    })
})
.catch((err) => {
    console.log('error connecting to database', err)
})