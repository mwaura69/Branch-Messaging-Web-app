import react from 'react'


const Auth = ({children}) => {

    if (localStorage.getItem("token")) {
        return children
    }

    
    return (
        <>
            <div></div>
        </>
    )
}

export default Auth