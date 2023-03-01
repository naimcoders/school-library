import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PostBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  const URL_BACKEND = 'http://localhost:5000/books'

  const onPostBook = async data => {
    const formData = new FormData()
    formData.append('book_code', data.book_code)
    formData.append('title', data.title)
    formData.append('total', data.total)
    formData.append('image', data.image[0])

    try {
      await axios.post(`${URL_BACKEND}/add`, formData, {
        headers: { 'Content_Type': 'multipart/form-data' }
      })
      navigate('/admin/books')
    } catch (err) {
      console.log(err)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onPostBook
  }
}

export default PostBook