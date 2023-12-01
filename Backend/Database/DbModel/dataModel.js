import mongoose from 'mongoose'


const branchModel = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    isadmin: Boolean
})

export const users = mongoose.model('profiles', branchModel)