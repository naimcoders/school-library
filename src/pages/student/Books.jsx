import { lazy, Suspense, useState } from "react"

const IndexHeader = lazy(() => import('../layouts/Header/IndexHeader'))
const SearchBook = lazy(() => import('../layouts/search/SearchBook'))
const BooksCard = lazy(() => import('../layouts/cards/BooksCard'))

const Books = () => {
  const [searchBook, setSearchBook] = useState('')
  const searchProps = {
    searchBook,
    setSearchBook
  }

  return (
    <main className="Books-app">
      <Suspense fallback={<h1>Loading...</h1>}>
        <IndexHeader  />
        <SearchBook {...searchProps} isAddBook={false} />
        <BooksCard dataSearch={searchBook} isAdmin={false} />
      </Suspense>
    </main>
  )
}

export default Books