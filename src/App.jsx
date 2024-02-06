import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignInPage from './pages/SignIn__Page/index'
import { routes } from './constants/routes'
import './App.css'
import SignUpPage from './pages/SignUp__Page'
import HomePage from './pages/Home__Page'
import ResetPassword from './pages/ResetPassword__Page'
const App = () => {
  return (
 <Router>
  <Routes>
    <Route path={routes.logIn()} element={<SignInPage/>} />
    <Route path={routes.signUp()} element={<SignUpPage/>} />
    <Route path={routes.home()} element={<HomePage/>} />
    <Route path={routes.resetPassword()} element={<ResetPassword/>} />
  </Routes>
 </Router>
  )
}

export default App
