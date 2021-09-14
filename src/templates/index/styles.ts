import styled from 'styled-components'

export const MainGrid = styled.div`
  display: grid;
  margin-top: 2rem;
  gap: 2rem;
  grid-template-columns: 16rem 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`
