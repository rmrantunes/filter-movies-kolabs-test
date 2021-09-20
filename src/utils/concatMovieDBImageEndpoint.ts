const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'

export function concatMovieDBImageEndpoint(path: string) {
  return MOVIE_DB_IMAGE_ENDPOINT + path
}
