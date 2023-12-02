import { createContext, useContext, useState } from "react"
//import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/RenderNav";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


const Auth = () => {

    const [ user, setUser ] = useState({name: "", isAuthenticated: false})

    const login = (userName, password) => {

    setToken(newToken);
    localStorage.setItem('token', newToken);
        
        return new Promise((resolve, reject) => {

            if (password === "password") {
                setUser({name: userName, isAuthenticated: true})
                resolve("success")
            } else {
                reject("Incorrect password")
            }
        })
        
        
    }
    const logout = () => {

        setUser({...user, isAuthenticated: false})
    }


    return (
        
            <AuthContext.Provider value={{user, login, logout}}>
                <>
                        {/* <RenderHeader /> */}
                        <RenderMenu />
                        <RenderRoutes />
                </>
                
            </AuthContext.Provider>
        
    )

}
export default Auth