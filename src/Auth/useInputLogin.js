import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useInputLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const URL_BACKEND = 'http://localhost:5000'
  
  const onLoginAdmin = async ({ nip, fullname, password }) => {
    const response = await axios.get(
      `${URL_BACKEND}/login_admin/${nip}/${fullname}/${password}`
    )
    
    const total = await response.data?.datas[0].total
    if (total > 0) {
      setTimeout(() => {
        navigate(`/admin/books`)
      }, 500)
      reset()
    } else alert('Login is failed!')
  }

  const onLoginStudent = async ({ nim, fullname, password }) => {
    const response = await axios.get(
      `${URL_BACKEND}/login_student/${nim}/${fullname}/${password}`
    )
    
    const total = response.data?.datas[0].total
    if (total > 0) {
      setTimeout(() => {
        navigate(`/student/books`)
      }, 500)
      reset()
    } else alert('Login is failed!')
  }
  
  return {
    register,
    handleSubmit,
    errors,
    onLoginAdmin,
    onLoginStudent
  }
}