import react from 'react'
import { useNavigate } from 'react-router-dom'
import office from '../assets/office.svg'



const Content = () => {
    const navigate = useNavigate()
    const gettingToSignUp = () => {
        navigate('/Signup')
    }
    return (
        <>
            <div className='main-content'>
                <div className='first-content'>
                    <h2>Welcome to Our Customer Support Feel Free To Get In Touch!</h2>
                    <h4>We are the leading company in Customer Support, helping millions and employing thousands. Need any help, We Got You!</h4>
                    <button onClick={gettingToSignUp}>Get Started</button>
                </div>
                <div className='sec-content'>
                    <img src={office} height='500px' width='550px' />
                </div>
            </div>
        </>
    )
}


export default Content