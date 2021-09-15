import Aside from 'components/Aside'
import { Container } from 'components/Container'
import Input from 'components/Input'
import {
  MovieResponse,
  PersonResponse,
  TvResponse
} from 'types/themoviedb-response'

import * as S from './styles'

export type IndexTemplateProps =
  | {
      filter: 'tv'
      response: TvResponse
    }
  | { filter: 'movie'; response: MovieResponse }
  | { filter: 'person'; response: PersonResponse }

export default function IndexTemplate(props: IndexTemplateProps) {
  return (
    <Container>
      <Input />
      <S.MainGrid>
        <Aside />
      </S.MainGrid>
    </Container>
  )
}
