import React from 'react'
import './styles/ResetPassword.css'
import ResetText from './components/block/ResetText'
import ResetForm from './components/block/ResetForm'

const ResetPassword = () => {
  return (
      <div className='reset-password-page'>
          <div className="reset-password-block">
              <ResetText />
              <ResetForm />
      </div>
      </div>
  )
}

export default ResetPassword