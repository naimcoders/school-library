import { memo, useState } from 'react'
import { BtnLogout } from '../../../styles/Button'
import { IndexHeaderStyled } from '../../../styles/Header'
import Logout from '../modals/Logout'

const IndexHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <IndexHeaderStyled>
      <div>
        <h1>Student Library</h1>
      </div>
      <BtnLogout onClick={() => setIsOpen(true)}>Log out</BtnLogout>

      <Logout open={isOpen} onClose={setIsOpen} />
    </IndexHeaderStyled>
  )
}

export default memo(IndexHeader)