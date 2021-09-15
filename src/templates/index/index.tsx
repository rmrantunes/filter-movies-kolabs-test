import Aside from 'components/Aside'
import Card from 'components/Card'
import { Container } from 'components/Container'
import Search from 'components/Search'
import {
  MovieResponse,
  PersonResponse,
  TvResponse
} from 'types/themoviedb-response'

import * as S from './styles'

export type IndexTemplateProps =
  | { filter: 'tv'; response: TvResponse }
  | { filter: 'movie'; response: MovieResponse }
  | { filter: 'person'; response: PersonResponse }

export default function IndexTemplate(props: IndexTemplateProps) {
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
