import { lazy, Suspense } from 'react'
import PostBook from '../../fatchers/PostBook'
import {
  FormStyled,
  FormSection
} from '../../styles/Form'
import { BtnAddBook } from '../../styles/Button'

const GoBackHeader = lazy(() => import('../layouts/Header/GoBackHeader'))

const AddBook = () => {
  const {
    register,
    handleSubmit,
    errors,
    onPostBook
  } = PostBook()

  return (
    <section className='Add-book'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <GoBackHeader
          title='Add a new book'
          router={`/admin/books`}
        />
        <FormStyled onSubmit={handleSubmit(onPostBook)}>
          <FormSection>
            <label htmlFor="book_code">Book Code</label>
            <input
              type="text"
              id='book_code'
              {...register('book_code', {
                required: 'Please enter book code'
              })}
              autoComplete='off'
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
              autoComplete='off'
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
              autoComplete='off'
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
            Save
          </BtnAddBook>
        </FormStyled>
      </Suspense>
    </section>
  )
}

export default AddBook