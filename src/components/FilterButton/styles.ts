import styled, { css } from 'styled-components'

export type FilterButtonSCProps = {
  isActive: boolean
}

export const FilterButton = styled.button<FilterButtonSCProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${theme.colors.gray};
    }

    ${isActive &&
    css`
      background: ${theme.colors.gray};
      font-weight: 500;
    `}
  `}
`
