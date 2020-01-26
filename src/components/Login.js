import React from 'react'

import useForm from '../hooks/useForm'
import validateAuth from '../helpers/validateAuth'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Login = () => {
  const {handleSubmit, handleChange, handleBlur, errors, values} = useForm(INITIAL_STATE, validateAuth);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleChange}
        onBlur={handleBlur} 
        type='email' 
        name='email' 
        placeholder='Ingresa tu email' 
      />
      {errors.email && <p>{ errors.email }</p>}
      <input 
        onChange={handleChange}
        onBlur={handleBlur}  
        type='password' 
        name='password' 
        placeholder='Ingresa tu password' 
      />
      {errors.password && <p>{ errors.password }</p>}
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
