import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignInPage from './pages/SignIn__Page/index'
import { routes } from './constants/routes'
import './App.css'
const App = () => {
  return (
 <Router>
  <Routes>
    <Route path={routes.logIn()} element={<SignInPage/>} />
  </Routes>
 </Router>
  )
}

export default App
