import react, { useState } from 'react'


const Signup = () => {
    const [inputs, setInputs] = useState({
        names: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    })
    return (
        <>
            <div>
                <label>Name: <input value={inputs.names} type='text' onChange={(e) => setInputs({ ...inputs, text: e.target.value })} /></label>
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
                <button>Sign up</button>
            </div>
        </>
    )
}

export default Signup