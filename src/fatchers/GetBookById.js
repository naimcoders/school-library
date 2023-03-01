import axios from 'axios'
import { useQuery } from 'react-query'

const GetBookById = id => {
  const URL_BACKEND = 'http://localhost:5000/books'
  
  const fetchBookById = async () => {
    const response = await axios.get(`${URL_BACKEND}/${id}`)
    return response.data
  }

  const { isLoading, data } = useQuery(
    'GetBookById',
    fetchBookById
  )
  
  return { isLoading, data }
}

export default GetBookById