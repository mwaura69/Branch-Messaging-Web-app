import React from 'react';
import { Link, } from 'react-router-dom'
import Logout from './Logout'





const Sidebar = () => {
    const side = [
        {
            number: 1,
            page:' ',
        },
        {
            number: 2,
            page:' ',
        },
        {
            number: 3,
            page:' ',
        },
        
    ]
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-logo">
                    {/* Replace with your logo */}
                    <Link to="/">
                        <img alt="Logo" src="your-logo-path" />
                    </Link>
                </div>
                <nav className="sidebar-nav">
                    {side.map(({ number, page }) => (
                        <div key={number} className="sidebar-nav-item">
                            <Link to={page.toLowerCase()}>{page}</Link>
                        </div>
                    ))}
                </nav>
                <Logout />
            </div>
        </>
    );
};

export default Sidebar;
