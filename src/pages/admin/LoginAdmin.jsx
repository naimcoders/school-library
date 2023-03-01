import { lazy, Suspense } from "react"

const Login = lazy(() => import('../layouts/forms/Login'))
const GoBackHeader = lazy(() => import('../layouts/Header/GoBackHeader'))

const LoginAdmin = () => {
  const userID = {
    id1: 'nip',
    id2: 'fullname',
    id3: 'password'
  }

  return (
    <section className='Login-app'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <GoBackHeader
          title='Login as admin'
          router='/'
        />
        <Login {...userID} />
      </Suspense>
    </section>
  )
}

export default LoginAdmin