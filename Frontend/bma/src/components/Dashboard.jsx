import React from 'react'
import Sidebar from './Sidebar'
import Chatspage from './Chatspage'
import SeeMessages from './SeeMessages'
import Messages from './Messages'
import { Routes, Route } from 'react-router-dom'


const Dashboard = () => {

    return (
        <>
            <div className='main-dashboard'>
                <Sidebar />
                <Chatspage />
                {/* <div className='dashboard-content'>
                    <Routes>
                        <Route path='/livechat' element={} />
                        <Route path='/previouschats' element={<SeeMessages />} />
                        <Route path='/inbox' element={<Messages />} />
                    </Routes>
                </div> */}
            </div>
        </>
    )
}

export default Dashboard