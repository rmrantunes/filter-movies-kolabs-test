import { CardProps } from 'components/Card'
import { MediaType, MultiResult } from 'types/themoviedb-response'
import { formatDate } from 'utils/formatDate'

const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'

export function mapResultToCardProps(result: MultiResult): CardProps {
  switch (result.media_type) {
    case MediaType.Movie:
      return {
        title: result.original_title,
        subtitle: result.release_date ? formatDate(result.release_date) : '',
        description: result.overview,
        image: MOVIE_DB_IMAGE_ENDPOINT + result.backdrop_path
      }
    case MediaType.Tv:
      return {
        title: result.name,
        subtitle: result.first_air_date
          ? formatDate(result.first_air_date)
          : '',
        description: result.overview,
        image: MOVIE_DB_IMAGE_ENDPOINT + result.backdrop_path
      }
    case MediaType.Person:
      return {
        title: result.name,
        subtitle: result.known_for_department,
        description: `Conhecido por: ${result.known_for
          .map(({ title }) => (title ? `'${title}'` : ''))
          .filter(Boolean)
          .join(', ')}`,
        image: MOVIE_DB_IMAGE_ENDPOINT + result.profile_path
      }
  }
}
