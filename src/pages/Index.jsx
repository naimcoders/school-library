import { lazy, Suspense } from 'react'
import './Styles.css'
import {
  BtnSignInAdminStyled,
  BtnSignInStudentStyled
} from '../styles/Button'
import { useNavigate } from 'react-router-dom'

const HomeHeader = lazy(() => import('./layouts/Header/HomeHeader'))

const Index = () => {
  const navigate = useNavigate()
  return (
    <main className='Home-app'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <HomeHeader />
      </Suspense>
      <div>
        <BtnSignInAdminStyled onClick={() => navigate('/login_admin')}>
          Login as admin
        </BtnSignInAdminStyled>
        <BtnSignInStudentStyled onClick={() => navigate('/login_student')}>
          Login as student
        </BtnSignInStudentStyled>
      </div>
    </main>
  )
}

export default Index