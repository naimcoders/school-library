import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const EditBook = (paramId, paramImage) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()

  const navigate = useNavigate()
  const URL_BACKEND = 'http://localhost:5000/books'

  const onUpdateBook = async ({ book_code, title, total, image }) => {
    const formData = new FormData()
    formData.append('book_code', book_code)
    formData.append('title', title)
    formData.append('total', total)
    formData.append('image', image[0])
    try {
      await axios.put(`${URL_BACKEND}/${paramId}/${paramImage}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      navigate('/admin/books')
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    register,
    handleSubmit,
    errors,
    onUpdateBook,
    setValue
  }
}

export default EditBook