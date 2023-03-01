import { lazy } from 'react'

const GoBackHeader = lazy(() => import('../layouts/Header/GoBackHeader'))
const Register = lazy(() => import('../layouts/forms/Register'))

const RegisterAdmin = () => {
  const inputID = {
    id1: 'nip',
    id2: 'fullname',
    id3: 'password',
    id4: 'confirm_password'
  }

  return (
    <section className="Register-app">
      <GoBackHeader
        title='Register Admin'
        router='/login_admin'
      />
      <Register {...inputID} />
    </section>
  )
}

export default RegisterAdmin