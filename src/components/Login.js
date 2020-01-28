import React from 'react'
import styled from 'styled-components'

import useForm from '../hooks/useForm'
import validateAuth from '../helpers/validateAuth'

const INITIAL_STATE = {
  email: '',
  password: ''
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  & input {
    border: 1px solid lightgray;
    padding: 15px;
    margin: 10px 0;
    font-size: 1.1rem;
  }
  & button {
    background-color: olive;
    color: white;
    padding: 20px;
    border: 1px solid lightgray;
    margin-top: 15px;
  }
  & p {
    color: crimson;
    font-size: 1rem;
  } 
`

const Login = (props) => {
  const {handleSubmit, handleChange, handleBlur, errors, values} = useForm(INITIAL_STATE, validateAuth, props);

  return (
    <Container>
      <Formulario onSubmit={handleSubmit}>
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
      </Formulario>
    </Container>
  )
}

export default Login
