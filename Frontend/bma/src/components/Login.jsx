import react, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../routes/AuthContext';
import logins from '../assets/login.webp'


const Login = () => {
    const { login, setNewUserId, getNames, stickyNumbers } = useAuth();

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const loginToPage = async () => {
        try {
            const response = await axios.post('http://localhost:4001/user/login', inputs);
            if (response.status === 200) {
                const { token, _id, name, phoneNumber } = response.data;
                console.log(response.data)
                setNewUserId(_id)
                login(token)
                getNames(name)
                stickyNumbers(phoneNumber)
                navigate('/Dashboard');
                setInputs(response.data);
            } else {
                navigate('/Login');
            }
            
                // {userId && <Messages userId={userId} />}
        } catch (err) {
            console.log(`${err}`);
        }
    };
    
    return (
        <>
            <div className='main-login'>
                <button className='back-button' onClick={() => window.location.href = 'http://localhost:5173/'}>
                    Home
                </button>
                <div className='first-login'>
                    <h2>Log In</h2>
                    <label>Email: <input value={inputs.email} type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value})} /></label>
                    <label>Password: <input value={inputs.password} type='password' onChange={(e) => setInputs({ ...inputs, password: e.target.value})} /></label>
                    <button onClick={loginToPage}>Login</button>
                    <p>Don't have an account?<a href='http://localhost:5173/Signup'>Sign Up</a></p>
                </div>
                <div className='sec-login'>
                    <img src={logins}  />
                </div>
            </div>
        </>
    )
}

export default Login