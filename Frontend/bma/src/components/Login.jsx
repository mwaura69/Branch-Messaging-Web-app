import react, { useState } from 'react'


const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <div>
                <input value={inputs.email} type='email' onChange={(e) => setInputs({ ...inputs, email: e.target.value})}   />
            </div>
            <div>
                <input value={inputs.password} type='password' onChange={(e) => setInputs({ ...inputs, password: e.target.value})}   />
            </div>
            <div>
                <button>Login</button>
            </div>
        </>
    )
}

export default Login