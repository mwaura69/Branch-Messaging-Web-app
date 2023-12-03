import react from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
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
          </div>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
