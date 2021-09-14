import Aside from 'components/Aside'
import { Container } from 'components/Container'
import Input from 'components/Input'

import * as S from './styles'

export default function IndexTemplate() {
  return (
    <Container>
      <Input />
      <S.MainGrid>
        <Aside />
      </S.MainGrid>
    </Container>
  )
}
