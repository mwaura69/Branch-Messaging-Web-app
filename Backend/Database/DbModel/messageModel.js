import mongoose from 'mongoose'

const message = new mongoose.Schema({
    mail: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profiles'
    }
})

export const inbox = mongoose.model('chats', message)