import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1.125rem 1fr;
    align-items: center;

    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.gray};
    transition: all 0.2s;

    &:focus-within {
      border-bottom-color: ${theme.colors.lightBlue};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    outline: none;
    flex: 1;

    &::placeholder {
      color: ${theme.colors.gray};
      font-style: italic;
    }
  `}
`
