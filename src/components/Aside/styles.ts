import styled, { css } from 'styled-components'

export const Aside = styled.aside`
  ${({ theme }) => css`
    border-radius: ${theme.rounded.lg};
    overflow: hidden;
    border: 1px solid ${theme.colors.gray};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    font-size: 1.125rem;
    color: ${theme.colors.white};
    background: ${({ theme }) => theme.colors.lightBlue};
  `}
`

export const Nav = styled.nav`
  padding: 0.5rem 0;
`
