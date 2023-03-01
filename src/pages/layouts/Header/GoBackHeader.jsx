import GoBackIcon from '../../../assets/icons/arrowLeft.svg'
import { useNavigate } from 'react-router-dom'
import { GoBackHeaderStyled } from '../../../styles/Header'

const GoBackHeader = ({ title, router }) => {
  const navigate = useNavigate()
  
  return (
    <GoBackHeaderStyled>
      <img
        src={GoBackIcon}
        alt="Go Back"
        onClick={() => navigate(router)}
      />
      <h1>{title}</h1>
    </GoBackHeaderStyled>
  )
}

export default GoBackHeader