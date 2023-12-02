import react, { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../routes/AuthContext';


const Login = () => {
    const { login, setNewUserId } = useAuth();

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const loginToPage = async () => {
        try {
            const response = await axios.post('http://localhost:4001/user/login', inputs);
            if (response.status === 200) {
                const { token, _id } = response.data;
                console.log(response.data)
                setNewUserId(_id)
                login(token)
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
            <div>
                <label>Email: <input value={inputs.email} type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value})}   /></label>
            </div>
            <div>
                <label>Password: <input value={inputs.password} type='password' onChange={(e) => setInputs({ ...inputs, password: e.target.value})}   /></label>
            </div>
            <div>
                <button onClick={loginToPage}>Login</button>
            </div>
        </>
    )
}

export default Login