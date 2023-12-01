import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { users } from './Database/DbModel/dataModel.js'
import { inbox } from './Database/DbModel/messageModel.js'

const app = express()

app.use(express.json())
app.use(cors())

const uri = 'mongodb+srv://vodeya5213:DYg9TvUlCYtZhHoU@bma.ulyjz9a.mongodb.net/'

//sign up
app.post('/user/signup', async(req, res) => {
    const { name, email, password, phoneNumber } = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        const details = {
            name,
            password: hashedPassword,
            email,
            phoneNumber,
        }
        const createUser = await users.create(details)
        return res.status(200).json(createUser)
    } catch(err) {
        return res.status(501).send(`${err}`)
    }
})


//login
app.post('/user/login', async(req, res) => {
    const {email, password } = req.body
    try {
        const loginUser = await users.findOne({email})
        if(!loginUser) {
            return res.status(404).send('Create new user!!')
        }
        const checkPassword = await bcrypt.compare(password, loginUser.password)
        if(!checkPassword) {
            return res.status(404).send('Incorrect Password')
        }
        res.status(200).json(loginUser);
    } catch (err) {
        return res.status(501).send(`${err}`)
    }
})

//post a message
app.post('/send/message', async(req, res) => {
    const { mail } = req.body
    try {
        const writeMessage = await inbox.create({mail})
        return res.json(writeMessage)
    } catch(err) {
        return res.status(501).send(`${err}`)
    }
})

//getting meassages posted by diff users
app.get('/inbox/messages/:id', async(req, res) => {
    const { id } = req.params.id
    try {
        const getMessage = await inbox.find({user: id}).populate('user')
        return res.status(200).json(getMessage)
    } catch(err) {
        return res.status(501).send(`${err}`)
    }
})


mongoose.connect(uri)
.then(() => {
    app.listen(4001, () => {
        console.log('Connected to database, listening on port 4001')
    })
})
.catch((err) => {
    console.log('error connecting to database', err)
})