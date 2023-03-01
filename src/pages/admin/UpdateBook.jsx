import {
  FormSection,
  FormStyled
} from "../../styles/Form"
import { lazy, Suspense, useEffect } from "react"
import { BtnAddBook } from "../../styles/Button"
import { useParams } from "react-router-dom"
import EditBook from "../../fatchers/EditBook"
import GetBookById from "../../fatchers/GetBookById"

const GoBackHeader = lazy(() => import('../layouts/Header/GoBackHeader'))

const UpdateBook = () => {
  const { id, image } = useParams()

  const {
    register,
    handleSubmit,
    onUpdateBook,
    errors,
    setValue
  } = EditBook(id, image)
  
  const { isLoading, data } = GetBookById(id)

  useEffect(() => {
    setValue('book_code', data?.datas[0].book_code)
    setValue('title', data?.datas[0].title)
    setValue('total', data?.datas[0].total)
    // eslint-disable-next-line
  }, [data])

  return (
    <section className="Edit-app">
      <Suspense fallback={<h1>Loading...</h1>}>
        <GoBackHeader
          title='Edit book'
          router='/admin/books'
        />
        {isLoading
          ? <h1>Loading...</h1>
          : (
            <FormStyled onSubmit={handleSubmit(onUpdateBook)}>
              <FormSection>
                <label htmlFor="book_code">Book Code</label>
                <input
                  type="text"
                  id='book_code'
                  {...register('book_code', {
                    required: 'Please enter book code'
                  })}
                />
                {errors?.book_code
                  ? <p style={{color: 'red'}}>{errors?.book_code?.message}</p>
                  : null
                }
              </FormSection>
              <FormSection>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id='title'
                  {...register('title', {
                    required: 'Please enter title'
                  })}
                />
                {errors?.title
                  ? <p style={{color: 'red'}}>{errors?.title?.message}</p>
                  : null
                }
              </FormSection>
              <FormSection>
                <label htmlFor="total">Total</label>
                <input
                  type="number"
                  id='total'
                  {...register('total', {
                    required: 'Please enter total'
                  })}
                />
                {errors?.total
                  ? <p style={{color: 'red'}}>{errors?.total?.message}</p>
                  : null
                }
              </FormSection>
              <FormSection>
                <label htmlFor="file">Upload an image</label>
                <input
                  type="file"
                  id='file'
                  {...register('image', {
                    required: 'Please choose an image'
                  })}
                />
                {errors?.image
                  ? <p style={{color: 'red'}}>{errors?.image?.message}</p>
                  : null
                }
              </FormSection>

              <BtnAddBook>
                Edit
              </BtnAddBook>
            </FormStyled>
          )
        }
      </Suspense>
    </section>
  )
}

export default UpdateBook