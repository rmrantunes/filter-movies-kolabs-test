import { useEffect } from 'react'
import { useSearch } from 'hooks/useSearch'
import { MovieDBMultiResponse } from 'types/themoviedb-response'

import Aside from 'components/Aside'
import { Container } from 'components/Container'
import Search from 'components/Search'
import { Results } from 'components/Results'

import * as S from './styles'

export type IndexTemplateProps = { response: MovieDBMultiResponse }

export default function IndexTemplate(props: IndexTemplateProps) {
  const { setResults } = useSearch()

  useEffect(() => {
    setResults(props.response.results)
  }, [props.response])

  return (
    <S.Wrapper>
      <Container>
        <Search />
        <S.MainGrid>
          <Aside />
          <Results />
        </S.MainGrid>
      </Container>
    </S.Wrapper>
  )
}
