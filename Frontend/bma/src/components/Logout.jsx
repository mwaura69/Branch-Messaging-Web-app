import react from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from '../routes/AuthContext';


const Logout = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const loggingOut = () => {
        logout();
        navigate('/');
    }

    return (
        <>
            <div>
                <button onClick={loggingOut}>Logout</button>
            </div>
        </>
    )
}

export default Logout