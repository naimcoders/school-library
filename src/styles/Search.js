import styled, { keyframes } from "styled-components"

export const SearchStyled = styled.section`
  gap: 1rem;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;

  @media (max-width: 380px) {
    flex-direction: column;
  }

  @media (max-width: 230px) {
    padding: 1rem;
  }
`

const TextFieldFocus = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(.96); }
  100% { transform: scale(1); }
`

const TextField = styled.input`
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: .5rem;

  &:focus {
    outline: none;
  }

  &:active {
    animation: ${TextFieldFocus} 120ms ease;
  }
`

export const TextFieldSearch = styled(TextField)`
  border: 1px solid #252525;

  @media (max-width: 350px) {
    font-size: .9rem;
  }
`