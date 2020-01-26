import { useState } from 'react'

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  function handleBlur() {
    const validationErrors = validate(values)
    setErrors(validationErrors)
  }

  function handleSubmit() {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    console.log('Logeado', values)
  }

  return {handleSubmit, handleChange, handleBlur, errors, values}

}

export default useForm

