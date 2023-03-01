import styled, { css, keyframes } from "styled-components"

const baseStylesForm = css`
  display: flex;
  flex-direction: column;
`

export const FormStyled = styled.form`
  top: 50%;
  left: 50%;
  gap: 1.5rem;
  width: 60vw;
  padding: 1rem;
  ${baseStylesForm}
  position: absolute;
  border-radius: 1rem;
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 1rem rgba(0, 0, 0, .1);
  background-color: ${({theme}) => theme.background.white};

  @media (max-width: 390px) {
    width: 80vw;
  }

  @media (min-width: 1024px) and (max-width: 1920px) {
    width: 25rem;
  }
`

const FormFocusAnimate = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(.95); }
  100% { transform: scale(1); }
`

export const FormSection = styled.section`
  gap: .5rem;
  ${baseStylesForm}

  & > input {
    border: none;
    font-size: 1rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    background-color: #eee;
  }
  
  & > input:focus {
    outline: none;
    border-bottom: 1px solid #252525;
    animation: ${FormFocusAnimate} 120ms ease;
  }
`