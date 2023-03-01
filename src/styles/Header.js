import styled from 'styled-components'

const HeaderStyled = styled.header`
  padding: 1rem 2rem;
  border-radius: 0 0 1rem 1rem;
`

export const HomeHeaderStyled = styled(HeaderStyled)`
  text-align: center;
  color: ${({theme}) => theme.color.black};
  background-color: ${({theme}) => theme.background.color2};

  @media (max-width: 230px) {
    padding: 1rem;
    font-size: 6vmin;
  }
`

export const IndexHeaderStyled = styled(HeaderStyled)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({theme}) => theme.color.black};
  background-color: ${({theme}) => theme.background.color2};

  @media (max-width: 380px) {
    gap: 1rem;
    padding: 1rem;
    flex-direction: column;

    & > div {
      text-align: center;
    }
  }

  @media (max-width: 250px) {
    & > * {
      font-size: 7vmin;
    }
  }
`

export const GoBackHeaderStyled = styled(HeaderStyled)`
  color: ${({theme}) => theme.color.black};
  background-color: ${({theme}) => theme.background.white};

  gap: 2rem;
  display: flex;

  @media (max-width: 310px) {
    gap: 1rem;
    padding: 1rem;
    font-size: 5vmin;
  }
`