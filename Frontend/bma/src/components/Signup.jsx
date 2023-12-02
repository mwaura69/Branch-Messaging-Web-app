import react, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Signup = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    })

    const navigate = useNavigate()

    const signingUp = async() => {
        try {
            const response = await axios.post('http://localhost:4001/user/signup', inputs);
            if (response.status === 200) {
                navigate('/Login');
                setInputs(response.data);
                console.log(response.data);
            } else {
                navigate('/');
            }
        } catch (err) {
            console.log(`${err}`);
        }
    }

    return (
        <>
            <div>
                <label>Name: <input value={inputs.name} type='text' onChange={(e) => setInputs({ ...inputs, name: e.target.value })} /></label>
            </div>
            <div>
                <label>Email: <input value={inputs.email} type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value })} /></label>
            </div>
            <div>
                <label>Phone Number: <input value={inputs.phoneNumber} onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })} /></label>
            </div>
            <div>
                <label>Password: <input value={inputs.password} type='password' onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /></label>
            </div>
            <div>
                <label>Confirm Password: <input value={inputs.confirmPassword} type='password' onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /></label>
            </div>
            <div>
                <button onClick={signingUp}>Sign up</button>
            </div>
        </>
    )
}

export default Signup