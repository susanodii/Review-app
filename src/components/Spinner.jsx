import React from 'react'
import spinnerLoading from './Asset/spinnerLoading.gif'

const Spinner = () => {
  return (
   
    <img src={spinnerLoading} 
    alt='loading git'
    style={{width:'100px', margin:'auto', display:'block'}}
    /> 
  )
}

export default Spinner