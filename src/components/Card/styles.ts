import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 7.5rem;
    grid-template-columns: 6rem 1fr;
    border-radius: ${theme.rounded.lg};
    gap: 1rem;
    border: 1px solid ${theme.colors.gray};
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: ${theme.colors.lightBlue};
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0);
    }
  `};
`

export const Image = styled.div<{ source: string; 'aria-label': string }>`
  background-image: url(${(props) => props.source});
  background-position: center center;
  background-size: cover;
`

export const Content = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`

export const Subtitle = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textGray};
`
