import React from 'react'
import Messages from './Messages'
import SeeMessages from './SeeMessages'
import Logout from './Logout'


const Dashboard = () => {

    return (
        <>
            <div>
                <div>
                    <Logout />
                </div>
                <div>
                    <SeeMessages />
                </div>
                <h1>Hiii</h1>
                <Messages />
            </div>
        </>
    )
}

export default Dashboard