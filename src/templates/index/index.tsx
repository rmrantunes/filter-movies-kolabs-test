import { useEffect } from 'react'

import Aside from 'components/Aside'
import Card from 'components/Card'
import { Container } from 'components/Container'
import Search from 'components/Search'
import { useSearch } from 'hooks/useSearch'
import { MovieDBMultiResponse } from 'types/themoviedb-response'
import { mapResultToCardProps } from 'utils/mapResultToCardProps'

import * as S from './styles'

export type IndexTemplateProps = { response: MovieDBMultiResponse }

export default function IndexTemplate(props: IndexTemplateProps) {
  const { setResults, results } = useSearch()

  useEffect(() => {
    setResults(props.response.results)
  }, [props.response])

  return (
    <Container>
      <Search />
      <S.MainGrid>
        <Aside />
        <div>
          {results?.map((result) => (
            <Card key={result.id} {...mapResultToCardProps(result)} />
          ))}
        </div>
      </S.MainGrid>
    </Container>
  )
}
