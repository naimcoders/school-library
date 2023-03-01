import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useInputRegister = () => {
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const URL_BACKEND = 'http://localhost:5000'
  
  const onRegisterAdmin = async data => {
    if (data.password !== data.confirm_password) {
      resetField('confirm_password')
      setError(
        'confirm_password',
        { message: 'Password confirmation must be the same as the password.' }
      )
    } else {
      await axios.post(`${URL_BACKEND}/register_admin`, data)
      navigate('/login_admin')
    }
  }

  const onRegisterStudent = async data => {
    if (data.password !== data.confirm_password) {
      resetField('confirm_password')
      setError(
        'confirm_password',
        { message: 'Password confirmation must be the same as the password.' }
      )
    } else {
      await axios.post(`${URL_BACKEND}/register_student`, data)
      navigate('/login_student')
    }
  }
  
  return {
    register,
    handleSubmit,
    errors,
    onRegisterAdmin,
    onRegisterStudent,
  }
}