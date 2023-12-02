import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const loginToPage = async () => {
    try {
      const response = await axios.post('http://localhost:4001/user/login', inputs);
      if (response.status === 200) {
        const { token } = response.data;
        login(token);
        navigate('/dashboard'); // navigate to the protected route
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.log(`${err}`);
    }
  };

  return (
    <>
      <div>
        <label>Email: <input value={inputs.email} type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value })} /></label>
      </div>
      <div>
        <label>Password: <input value={inputs.password} type='password' onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /></label>
      </div>
      <div>
        <button onClick={loginToPage}>Login</button>
      </div>
    </>
  );
};

export default Login;
