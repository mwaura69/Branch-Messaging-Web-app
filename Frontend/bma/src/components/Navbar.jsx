import react from 'react'
import { Link, } from 'react-router-dom'


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
        {
            number: 3,
            page:'Dashboard',
        },
        {
            number: 4,
            page:'Inbox',
        }
    ]
    return (
        <>
            <div>
                {nav.map(({number, page}) => (
                    <div key={number}>
                        <Link to={page}>{page}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Navbar