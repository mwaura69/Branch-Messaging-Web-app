import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import {users} from '../Database/DbModel/dataModel.js'


const protectRoute = asyncHandler(async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) 
        {
        try {
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await users.findById(decoded.id).select('-password')

            next()
        } catch (err) {
            console.log(err)
            res.status(401).send('Not authorized')
        }
    }

    if(!token) {
        res.status(401).send('Not authorized, no token')
    }
})

export default protectRoute