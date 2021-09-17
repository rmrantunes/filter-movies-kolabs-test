import { MediaType, MultiResult } from 'types/themoviedb-response'
import { concatMovieDBImageEndpoint } from 'utils/concatMovieDBImageEndpoint'
import { formatDate } from 'utils/formatDate'
import { generateKnownFor } from 'utils/generateKnownFor'

import * as S from './styles'

type DetailedResultProps = { result: MultiResult }

export function DetailedResult(props: DetailedResultProps) {
  const isPerson = props.result.media_type === MediaType.Person

  const floatImagePath = isPerson
    ? props.result.profile_path
    : props.result.poster_path

  const title = isPerson ? props.result.name : props.result.original_title

  const subtitle = isPerson
    ? props.result.known_for_department
    : formatDate(props.result.release_date || props.result.first_air_date)

  const description = isPerson
    ? generateKnownFor(props.result.known_for)
    : props.result.overview

  return (
    <S.Wrapper>
      {props.result.backdrop_path && (
        <S.Cover
          image={concatMovieDBImageEndpoint(props.result.backdrop_path)}
        />
      )}

      <S.Content>
        {(props.result.profile_path || props.result.poster_path) && (
          <S.FloatImage image={concatMovieDBImageEndpoint(floatImagePath)} />
        )}
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}
