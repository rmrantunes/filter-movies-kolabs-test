import styled, { css } from 'styled-components'

export type FilterButtonSCProps = {
  isActive: boolean
}

export const FilterButton = styled.button<FilterButtonSCProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${theme.colors.gray};

      ${CountBadge} {
        background: ${theme.colors.white};
      }
    }

    ${isActive &&
    css`
      background: ${theme.colors.gray};
      font-weight: 500;

      ${CountBadge} {
        background: ${theme.colors.white};
      }
    `}
  `}
`

export const CountBadge = styled.span`
  ${({ theme }) => css`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border-radius: ${theme.rounded.full};
    background: ${theme.colors.gray};
  `}
`
