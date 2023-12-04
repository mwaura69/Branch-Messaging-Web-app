import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import axios from 'axios'
import { users } from '../Database/DbModel/dataModel.js'
import { inbox } from '../Database/DbModel/messageModel.js'



const router = express.Router();

//generate jwt tokens on the backend
const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
}

//sign up
router.post('/user/signup', async(req, res) => {
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

        // User signup on Chat Engine
        const userInChatEngine = await axios.post(
            'https://api.chatengine.io/users/',
            {
                username: name, // Assuming 'name' is the username
                secret: name,
                email,
            },
            { headers: { 'Private-Key': '56254df1-68a1-458f-a494-41efe6aa7f6b' } }
        );
        return res.status(200).json({
            _id: createUser.id,
            name: createUser.name,
            email: createUser.email,
            token: generateToken(createUser._id),
            chatEngineData: userInChatEngine.data,
        })
    } catch(err) {
        console.error(err);
        return res.status(501).send(`${err}`)
    }
})


//login
router.post('/user/login', async(req, res) => {
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
        const r = await axios.get("https://api.chatengine.io/users/me/", {
            headers: {
                "Project-ID": "b23fb5a1-6099-4240-acc5-f3eb35eca42e",
                "User-Name": loginUser.name,
                "User-Secret": loginUser.name,
            },
        });
        res.status(200).json({
            _id: loginUser.id,
            name: loginUser.name,
            email: loginUser.email,
            token: generateToken(loginUser._id),
            chatEngineData: r.data
        });
    } catch (err) {
        return res.status(501).send(`${err}`)
    }
})

//post a message
router.post('/send/message', async(req, res) => {
    const { mail, _id } = req.body
    try {
        const writeMessage = await inbox.create({mail, user: _id})
        return res.json(writeMessage)
    } catch(err) {
        return res.status(501).send(`${err}`)
    }
})

//getting meassages posted by diff users
router.get('/inbox/messages/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const getMessage = await inbox.find({user: _id}).populate('user')
        return res.status(200).json(getMessage)
    } catch(err) {
        return res.status(501).send(`${err}`)
    }
})


export default router