import react, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../routes/AuthContext';



const Messages = () => {
    const { userId } = useAuth();
    const [mail, setMail] = useState('')
    const _id = userId
    const sendMessage = async() => {
        try {
            const send = await axios.post('http://localhost:4001/send/message', {mail, _id})
            setMail('')
            console.log(send)
        } catch (err) {
            console.log(`${err}`)
        }
    }

    return (
        <>
            <div>
                <label>Message: <input value={mail} type='text' onChange={(e) => setMail(e.target.value)}  /></label>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </>
    )
}

export default Messages