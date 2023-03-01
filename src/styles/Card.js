import styled, { css } from "styled-components"

const baseStylesCards = css`
  padding: 1rem 2rem;
`

const baseFlex = css`
  gap: 1rem;
  display: flex;
`

export const SectionCards = styled.section`
  ${baseStylesCards}
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  
  @media (max-width: 370px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 285px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`

export const Card = styled.section`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 2rem rgba(0, 0, 0, .1);

  & > section {
    padding: 0 1rem 1rem;
    position: relative;

    ${baseFlex}
    flex-direction: column;
  }

  & > section > h1 {
    font-size: 1.2rem;
  }

  @media (max-width: 280px) {
    & > section {
      gap: .5rem;
    }
  }
`

// ===== Card Image ======
export const CardImageDiv = styled.div`
  padding: 1rem;
  height: 20rem;
  margin-bottom: 1rem;

  @media (max-width: 350px) {
    padding: .8rem;
  }
`

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: .5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .2);

  @media (max-width: 300px) {
    object-fit: cover;
  }
`

// ===== Card Code =====
export const CardCodeDiv = styled.div`
  ${baseFlex}
  justify-content: space-between;

  & > h1 {
    font-size: 1.4rem;
  }

  @media (max-width: 280px) {
    gap: .5rem;
    flex-direction: column;

    & > h1 {
      font-size: 1rem;
    }
  }
`

export const CardCodeAction = styled.div`
  ${baseFlex}
  align-items: center;
  & > a img {
    width: 1.4rem;
  }

  @media (max-width: 280px) {
    & > a img {
      width: 1rem;
    }
  }
`

export const CardStatus = styled.div`
  ${baseFlex}
  gap: .15rem;
  flex-direction: column;

  & h3:last-child {
    font-weight: normal;
  }

  @media (max-width: 280px) {
    & h3:last-child {
      font-size: 5vmin;
    }
  }
`