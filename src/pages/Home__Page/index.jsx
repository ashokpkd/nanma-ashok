import React from 'react'
import useCustomApi from '../../hooks/useCustomApi'

const HomePage = () => {
  const { get, post, error, data } = useCustomApi()
  
  get('https://fakestoreapi.com/products')
  console.log('fetch',data,error)
  return (
    <div>
home page
    </div>
  )
}

export default HomePage