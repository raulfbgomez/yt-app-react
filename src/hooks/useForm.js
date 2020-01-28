import { useState, useEffect } from 'react'

const useForm = (initialState, validate, props) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    const hayErrores = Object.keys(errors).length
    if (hayErrores === 0 && isSubmitting) {
      props.history.push('/home')
    }
    console.log(hayErrores)
  }
  ,[errors])

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
    setSubmitting(true)
    // console.log('Logeado', values)
  }

  return {handleSubmit, handleChange, handleBlur, errors, values}

}

export default useForm

