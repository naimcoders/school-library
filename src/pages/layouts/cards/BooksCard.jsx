import { Link } from 'react-router-dom'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'
import editIcon from '../../../assets/icons/editIcon.svg'
import GetBooks from '../../../fatchers/GetBooks'

import {
  Card,
  CardCodeAction,
  CardCodeDiv,
  CardImageDiv,
  CardStatus,
  ImageStyled,
  SectionCards
} from '../../../styles/Card'

const BooksCard = ({ dataSearch, isAdmin }) => {
  const { isLoading, data, isError } = GetBooks()

  return (
    <SectionCards>
      {
        isError
          ? <h1>Error 400</h1>
          : isLoading
            ? <h1>Loading...</h1>
            : data?.datas.filter(book => {
              return (
                dataSearch.toLowerCase() === ''
                  ? book
                  : book.title.toLowerCase().includes(dataSearch)
                    || book.book_code.toLowerCase().includes(dataSearch)
              )
            }).map(({
              id, book_code, title, total, image, url_image
            }) => (
              <Card key={id}>
                <CardImageDiv>
                  <ImageStyled
                    src={url_image}
                    alt='images'
                  />
                </CardImageDiv>
                <section>
                  <CardCodeDiv>
                    <h1>{book_code}</h1>
                    {isAdmin
                      ? (
                        <CardCodeAction>
                          <Link to={`/edit/${id}/${image}`}>
                            <img src={editIcon} alt="edit" />
                          </Link>
                          <Link to={`/delete/${id}/${image}`}>
                            <img src={deleteIcon} alt="delete" />
                          </Link>
                        </CardCodeAction>
                      )
                      : null
                    }
                  </CardCodeDiv>
                  <h1>{title}</h1>
                  <CardStatus>
                    <h3>{total > 1 ? `${total} books` : `${total} book`}</h3>
                    {
                      total > 0
                        ? <h3>Available</h3>
                        : <h3 style={{color: 'red'}}>Not Available</h3>
                    }
                  </CardStatus>
                </section>
              </Card>
            ))
      }
    </SectionCards>
  )
}

export default BooksCard