import axios from 'axios'
import { useQuery } from 'react-query'

const GetBooks = () => {
  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:5000/books`)
    return response.data
  }
  const { isLoading, data, isError } = useQuery('getBooks', fetchBooks)
  return { isLoading, data, isError }
}

export default GetBooks