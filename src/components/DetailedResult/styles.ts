import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 30rem;
    border-radius: ${theme.rounded.lg};
    background: ${theme.colors.white};
  `}
`

export const Content = styled.div`
  padding: 2rem;
`

export const Cover = styled.div<{ image: string }>`
  height: 10rem;
  background: url(${(props) => props.image}) center center no-repeat;
  background-size: cover;
`

export const FloatImage = styled(Cover)`
  height: 7.5rem;
  width: 7.5rem;
  margin-top: -6rem;
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.rounded.full};
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: 0.875rem;
    color: ${theme.colors.textGray};
  `}
`

export const Description = styled.p`
  margin-top: 0.75rem;
`
