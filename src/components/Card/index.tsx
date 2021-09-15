import * as S from './styles'

export type CardProps = {
  title: string
  subtitle: string
  image: string
  description: string
}

export default function Card(props: CardProps) {
  return (
    <S.Wrapper>
      <S.Image source={props.image} aria-label={props.title} />
      <S.Content>
        <div>
          <S.Title>{props.title}</S.Title>
          <S.Subtitle>{props.subtitle}</S.Subtitle>
        </div>
        <p>{props.description}</p>
      </S.Content>
    </S.Wrapper>
  )
}
