export interface MovieDBMultiResponse {
  page: number
  results: MultiResult[]
  total_pages: number
  total_results: number
}

export interface MultiResult {
  adult?: boolean
  gender?: number
  id: number
  known_for?: MultiResult[]
  known_for_department?: string
  media_type: MediaType
  name?: string
  popularity?: number
  profile_path?: null | string
  backdrop_path?: null | string
  genre_ids?: number[]
  original_language?: OriginalLanguage
  original_title?: string
  overview?: string
  poster_path?: null | string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
  first_air_date?: Date
  origin_country?: string[]
  original_name?: string
}

export enum MediaType {
  Movie = 'movie',
  Person = 'person',
  Tv = 'tv'
}

export enum OriginalLanguage {
  En = 'en'
}
