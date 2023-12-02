import react, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useAuth } from '../routes/AuthContext'


const SeeMessages = () => {
    const [chats, setChats] = useState('')
    const { userId } = useAuth()
    const _id = userId
    const receivedMessages = useCallback(() => {
        const response = axios.get(`http://localhost:4001/inbox/messages/${_id}`)
        setChats(response.data)
        console.log(response.data.data)
    })

    useEffect(() => {
        receivedMessages(_id)
    } ,[])

    return (
        <>
            <div>
                <p>{chats}</p>
            </div>
        </>
    )
}

export default SeeMessages