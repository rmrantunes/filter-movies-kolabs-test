import styled, { css } from 'styled-components'

export const Aside = styled.aside``

export const AsideCard = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.rounded.lg};
    overflow: hidden;
    border: 1px solid ${theme.colors.gray};
  `}
`

export const AsideCardHeader = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    color: ${theme.colors.white};
    background: ${({ theme }) => theme.colors.lightBlue};

    h2 {
      font-size: 1.125rem;
    }
  `}
`

export const AsideNav = styled.nav`
  padding: 0.5rem 0;
`
