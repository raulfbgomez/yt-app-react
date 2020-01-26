export default function validateAuth(values) {
  let errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  }
  if (!values.password) {
    errors.password = 'Passsword is required'
  }
  return errors
}