import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 8rem;
    grid-template-columns: 5.5rem 1fr;
    border-radius: ${theme.rounded.lg};
    border: 1px solid ${theme.colors.gray};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;

    & + & {
      margin-top: 1rem;
    }
  `};
`

export const Image = styled.div<{ source: string; 'aria-label': string }>`
  background-image: url(${(props) => props.source});
  background-position: center center;
  background-size: cover;
`

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
`

export const Subtitle = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.textGray};
`

export const Description = styled.p`
  width: 100%;
  font-size: 0.875rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
