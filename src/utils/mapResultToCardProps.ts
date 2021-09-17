import { CardProps } from 'components/Card'
import { MediaType, MultiResult } from 'types/themoviedb-response'
import { formatDate } from 'utils/formatDate'
import { generateKnownFor } from 'utils/generateKnownFor'

const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'
const IMAGE_PLACEHOLDER =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthealmanian.com%2Fwp-content%2Fuploads%2F2019%2F01%2Fproduct_image_thumbnail_placeholder.png&f=1&nofb=1'

export function mapResultToCardProps(result: MultiResult): CardProps {
  switch (result.media_type) {
    case MediaType.Movie:
      return {
        title: result.original_title,
        subtitle: result.release_date ? formatDate(result.release_date) : '',
        description: result.overview,
        image: result.backdrop_path
          ? MOVIE_DB_IMAGE_ENDPOINT + result.backdrop_path
          : IMAGE_PLACEHOLDER
      }
    case MediaType.Tv:
      return {
        title: result.name,
        subtitle: result.first_air_date
          ? formatDate(result.first_air_date)
          : '',
        description: result.overview,
        image: result.backdrop_path
          ? MOVIE_DB_IMAGE_ENDPOINT + result.backdrop_path
          : IMAGE_PLACEHOLDER
      }
    case MediaType.Person:
      return {
        title: result.name,
        subtitle: result.known_for_department,
        description: generateKnownFor(result.known_for),
        image: result.profile_path
          ? MOVIE_DB_IMAGE_ENDPOINT + result.profile_path
          : IMAGE_PLACEHOLDER
      }
  }
}
