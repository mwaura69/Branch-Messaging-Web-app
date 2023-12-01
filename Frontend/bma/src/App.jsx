import react from 'react'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Auth from './routes/Auth'


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/Dashboard' element={
            <Auth>
              <Dashboard />
            </Auth>
          } />
          <Route path='/' element={<Signup />} />
          <Route path='/Login' element={<Login />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
