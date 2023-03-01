import Login from "../layouts/forms/Login"
import GoBackHeader from "../layouts/Header/GoBackHeader"

const LoginStudent = () => {
  const userID = {
    id1: 'nim',
    id2: 'fullname',
    id3: 'password'
  }

  return (
    <section className='Login-app'>
      <GoBackHeader
        title='Login as student'
        router='/'
      />
      <Login {...userID} />
    </section>
  )
}

export default LoginStudent