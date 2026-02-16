
import './App.css'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

import LandingPage from './pages/landing/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
      </Routes>
     </Router>
    </>
  )
}

export default App
