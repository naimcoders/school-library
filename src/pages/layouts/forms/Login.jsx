import { Link } from 'react-router-dom'
import { useInputLogin } from '../../../Auth/useInputLogin'
import { BtnAddBook } from '../../../styles/Button'
import {
  FormStyled,
  FormSection
} from '../../../styles/Form'

const Login = ({ id1, id2, id3 }) => {
  const {
    register,
    handleSubmit,
    errors,
    onLoginAdmin,
    onLoginStudent
  } = useInputLogin()

  return (
    <FormStyled onSubmit={
      id1 === 'nip'
        ? handleSubmit(onLoginAdmin)
        : handleSubmit(onLoginStudent)
    }>
      <FormSection>
        <label htmlFor={id1}>{id1.toUpperCase()}</label>
        <input
          type="number"
          id={id1}
          autoFocus
          autoComplete='off'
          {...register(id1, {
            required: `Please enter the ${id1.toUpperCase()}`,
            maxLength: (
              id1 === 'nip'
                ? { value: 18, message: `Maximum ${id1.toUpperCase()} is 18 digits` }
                : { value: 10, message: `Maximum ${id1.toUpperCase()} is 10 digits` }
            ),
            minLength: (
              id1 === 'nip'
                ? { value: 18, message: 'NIP must be 18 digits' }
                : null
            )
          })}
        />
        {errors?.nip
          ? <p style={{color: 'red'}}>{errors?.nip?.message}</p>
          : <p style={{color: 'red'}}>{errors?.nim?.message}</p>
        }
      </FormSection>
      <FormSection>
        <label htmlFor={id2}>Full Name</label>
        <input
          type="text"
          id={id2}
          autoComplete='off'
          {...register(id2, {
            required: 'Please enter the fullname',
            maxLength: { value: 35, message: 'Character maximum is 35' }
          })}
        />
        {errors?.fullname
          ? <p style={{color: 'red'}}>{errors?.fullname?.message}</p>
          : null
        }
      </FormSection>
      <FormSection>
        <label htmlFor={id3}>Password</label>
        <input
          type="password"
          id={id3}
          autoComplete='off'
          {...register(id3, {
            required: 'Please enter the password',
            maxLength: { value: 25, message: 'Character maximum is 25' }
          })}
        />
        {errors?.password
          ? <p style={{color: 'red'}}>{errors?.password?.message}</p>
          : null
        }
      </FormSection>
      <BtnAddBook register>
        Login
      </BtnAddBook>
      <p>Don't have an account? 
        <Link
          to={id1 === 'nip' ? '/register_admin' : '/register_student'}
          style={{textDecoration: 'none', marginLeft: '.5rem'}}
        >
          Register
        </Link>
      </p>
    </FormStyled>
  )
}

export default Login