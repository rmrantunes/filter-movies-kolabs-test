import Aside from 'components/Aside'
import Card from 'components/Card'
import { Container } from 'components/Container'
import Search from 'components/Search'
import { useSearch } from 'hooks/useSearch'
import { useEffect } from 'react'
import { MovieDBMultiResponse } from 'types/themoviedb-response'

import * as S from './styles'

export type IndexTemplateProps = { response: MovieDBMultiResponse }

export default function IndexTemplate(props: IndexTemplateProps) {
  const { setResults } = useSearch()

  useEffect(() => {
    setResults(props.response.results)
  }, [props.response])

  return (
    <Container>
      <Search />
      <S.MainGrid>
        <Aside />
        <div>
          <Card
            title="Tom Holland"
            subtitle="Acting"
            image="https://image.tmdb.org/t/p/original/l6zPRmg8NI7Y65G5GUqwvjxFdsx.jpg"
            description={`Conhecido por: 'Avengers: Infinity War', 'Avengers: Endgame'`}
          />
        </div>
      </S.MainGrid>
    </Container>
  )
}
