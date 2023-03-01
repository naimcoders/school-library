import axios from 'axios'
import { useEffect } from 'react'
import {
  useNavigate,
  useParams
} from 'react-router-dom'

const DeleteBook = () => {
  const { id, image } = useParams()
  const navigate = useNavigate()
  const URL_BACKEND = 'http://localhost:5000/books'

  axios.delete(`${URL_BACKEND}/${id}/${image}`)
  useEffect(() => {
    navigate('/admin/books')
  }, [navigate])
}

export default DeleteBook