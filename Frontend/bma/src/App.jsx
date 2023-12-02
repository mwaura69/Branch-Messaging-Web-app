import react from 'react'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Messages from './components/Messages'
import { Routes, Route } from 'react-router-dom'
import {AuthProvider} from './routes/AuthContext'
import ProtectedRoutes from './routes/ProtectedRoutes'


const App = () => {
  return (
    <>
      <div>
        <AuthProvider>
          <div>
          <ProtectedRoutes>
              <Route
                    path="/Dashboard/*"
                    element={<ProtectedRoutes element={<Dashboard />} />}
                  />
          </ProtectedRoutes>
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
