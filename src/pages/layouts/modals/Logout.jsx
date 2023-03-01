import { BtnLogoutModal } from '../../../styles/Button'
import { useNavigate } from 'react-router-dom'
import ReactDom from 'react-dom'
import './Modals.css'

const Logout = ({ open, onClose }) => {
  const navigate = useNavigate()
  return ReactDom.createPortal(
    <>
      <div
        className='Overlay-logout'
        style={ open ? {transform: 'scale(1)'} : {transform: 'scale(0)'} }
      ></div>
      <main 
        className='Modal-logout'
        style={
          open
            ? {transform: 'translate(-50%, -50%) scale(1)'}
            : {transform: 'translate(-50%, -50%) scale(0)'}
        }
      >
        <h1>Log out?</h1>
        <div>
          <BtnLogoutModal
            logout
            onClick={() => navigate('/')}
          >
            Log out
          </BtnLogoutModal>
          <BtnLogoutModal
            onClick={() => onClose(false)}
          >
            No, I'm stay
          </BtnLogoutModal>
        </div>
      </main>
    </>,
    document.querySelector('#modal-logout')
  )
}

export default Logout