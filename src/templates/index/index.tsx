import { MovieDBMultiResponse } from 'types/themoviedb-response'

import Aside from 'components/Aside'
import { Container } from 'components/Container'
import Search from 'components/Search'
import { Results } from 'components/Results'

import * as S from './styles'

export default function IndexTemplate() {
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
