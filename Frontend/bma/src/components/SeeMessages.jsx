import react, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useAuth } from '../routes/AuthContext'


const SeeMessages = () => {
    const [chats, setChats] = useState('')
    const { userId } = useAuth()
    const _id = userId
    console.log(_id)
    const receivedMessages = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:4001/inbox/messages/${_id}`);
            setChats(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [_id]);

    // useEffect(() => {
    //     receivedMessages();
    // }, [receivedMessages]);


    return (
        <>
            <div>
                <p>hi below <button onClick={receivedMessages}>get messages</button></p>
            </div>
        </>
    )
}

export default SeeMessages