import { useNavigate } from 'react-router-dom'
import { BtnAddBook } from '../../../styles/Button'
import {
  SearchStyled,
  TextFieldSearch
} from '../../../styles/Search'

const SearchBook = ({ searchBook, setSearchBook, isAddBook }) => {
  const navigate = useNavigate()

  return (
    <SearchStyled>
      <TextFieldSearch
        type="text"
        placeholder='Search book...'
        autoFocus
        value={searchBook}
        onChange={({ target }) => setSearchBook(target.value)}
      />
      {isAddBook
        ? (
          <BtnAddBook onClick={() => navigate(`/admin/books/add_book`)}>
            Add book
          </BtnAddBook>
        )
        : null
      }
    </SearchStyled>
  )
}

export default SearchBook