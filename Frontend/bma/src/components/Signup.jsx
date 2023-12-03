import react, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import signup from '../assets/signup.webp'



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
            <div className='main-singup'>
                <button className='back-button' onClick={() => window.location.href = 'http://localhost:5173/'}>
                    Home
                </button>
                <div className='first-signup'>
                    <h2>Sign Up</h2>
                    <label>Name: <input value={inputs.name} type='text' onChange={(e) => setInputs({ ...inputs, name: e.target.value })} /></label>
                    <label>Email: <input value={inputs.email} type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value })} /></label>
                    <label>Phone Number: <input value={inputs.phoneNumber} onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })} /></label>
                    <label>Password: <input value={inputs.password} type='password' onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /></label>
                    <label>Confirm Password: <input value={inputs.confirmPassword} type='password' onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /></label>
                    <button onClick={signingUp}>Sign up</button>
                    <p>Already have an account?<a href='http://localhost:5173/Login'>Log in</a></p>
                </div>
                <div className='sec-signup'>
                    <img src={signup} height='400px' width='450px' />
                </div>
            </div>
        </>
    )
}

export default Signup