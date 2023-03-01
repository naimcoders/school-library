import { BtnAddBook } from '../../../styles/Button'
import { FormSection, FormStyled } from '../../../styles/Form'
import { useInputRegister } from '../../../Auth/useInputRegister'

const Register = ({ id1, id2, id3, id4 }) => {
  
  const {
    register,
    handleSubmit,
    errors,
    onRegisterAdmin,
    onRegisterStudent
  } = useInputRegister()

  return (
    <FormStyled onSubmit={
      id1 === 'nip'
        ? handleSubmit(onRegisterAdmin)
        : handleSubmit(onRegisterStudent)
    }>
      <FormSection>
        <label htmlFor={id1}>{id1.toUpperCase()}</label>
        <input
          type="number"
          id={id1}
          autoComplete='off'
          autoFocus
          {...register(id1, {
            required: `Please enter ${id1.toUpperCase()}`,
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
            required: `Please enter ${id2}`,
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
            required: `Please enter ${id3}`,
            maxLength: { value: 25, message: 'Character maximum is 25' }
          })}
        />
        {errors?.password
          ? <p style={{color: 'red'}}>{errors?.password?.message}</p>
          : null
        }
      </FormSection>
      <FormSection>
        <label htmlFor={id4}>Confirm Password</label>
        <input
          type="password"
          id={id4}
          autoComplete='off'
          {...register(id4, {
            required: `Please enter confirm password`
          })}
        />
        {errors?.confirm_password
          ? <p style={{color: 'red'}}>{errors?.confirm_password?.message}</p>
          : null
        }
      </FormSection>
      <BtnAddBook register>
        Register
      </BtnAddBook>
    </FormStyled>
  )
}

export default Register