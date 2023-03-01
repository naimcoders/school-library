import { lazy, Suspense } from 'react'

const GoBackHeader = lazy(() => import('../layouts/Header/GoBackHeader'))
const Register = lazy(() => import('../layouts/forms/Register'))

const RegisterStudent = () => {
  const inputID = {
    id1: 'nim',
    id2: 'fullname',
    id3: 'password',
    id4: 'confirm_password'
  }

  return (
    <section className="Register-app">
      <Suspense fallback={<h1>Loading...</h1>}>
        <GoBackHeader
          title='Register Student'
          router='/login_student'
        />
        <Register {...inputID} />
      </Suspense>
    </section>
  )
}

export default RegisterStudent