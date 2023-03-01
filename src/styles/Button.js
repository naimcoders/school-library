import styled, { keyframes } from "styled-components"

const buttonActive = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(.96); }
  100% { transform: scale(1); }
`

// ===== Global Styled Button =====
const Button = styled.button`
  border: none;
  font-size: 1rem;
  padding: .5rem 1rem;

  &:active {
    animation: ${buttonActive} 120ms;
  }
`

const HomeButtonStyled = styled(Button)`
  padding: 1rem;
  border-radius: 2rem;
  font-size: clamp(1rem, 3vw, 1.5rem);
`

export const BtnAddBook = styled(Button)`
  border-radius: .5rem;
  background-color: ${({theme}) => theme.background.color2};
  ${({register}) => register ? 'margin-top: 1rem;' : null}
`

export const BtnSignInAdminStyled = styled(HomeButtonStyled)`
  background-color: transparent;
  color: ${({theme}) => theme.color.black};
  border: 1px solid ${({theme}) => theme.background.color4};

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 1366px) {
    font-size: 1.2rem;
  }
`

export const BtnSignInStudentStyled = styled(HomeButtonStyled)`
  color: ${({theme}) => theme.color.black};
  background-color: ${({theme}) => theme.background.color2};

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 1366px) {
    font-size: 1.2rem;
  }
`

export const BtnLogout = styled(Button)`
  border-radius: 1rem;
  background-color: firebrick;
  color: ${({theme}) => theme.color.white};
`

export const BtnLogoutModal = styled(Button)`
  font-size: 1rem;
  border-radius: 1rem;

  ${({logout}) => logout
      ? `
        border: 1px solid firebrick;
        background-color: transparent;
      `
      : `
        background-color: #DCD6F7;
      `
  }

  @media (max-width: 200px) {
    font-size: 7vmin;
  }
`