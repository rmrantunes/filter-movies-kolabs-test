import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.gray};
    transition: all 0.2s;

    & * + * {
      margin-left: 1rem;
    }

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
