import react from 'react'
import { Link, } from 'react-router-dom'
import rct from '../assets/react.svg'


const Navbar = () => {
    const nav = [
        {
            number: 1,
            page:'Signup',
        },
        {
            number: 2,
            page:'Login',
        },
    ]
    return (
        <>
            <div className="main-navbar">
                <div className="navbar-logo">
                    {/* Replace with your logo */}
                    <Link to="/" className="nav-link-logo">
                        <img src={rct} alt="Your Logo" />
                    </Link>
                </div>
            <nav className="navbar">
                {nav.map(({ number, page }) => (
                    <div key={number} className="nav-item">
                        <Link to={page} className="nav-link">
                            {page}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
        </>
    )
}

export default Navbar