export type Filters = 'person' | 'tv' | 'movie'

export interface MovieResponse {
  page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}

export interface MovieResult {
  adult: boolean
  backdrop_path: null | string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface TvResponse {
  page: number
  results: TVResult[]
  total_pages: number
  total_results: number
}

export interface TVResult {
  backdrop_path: null | string
  first_air_date: Date
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: null | string
  vote_average: number
  vote_count: number
}

export interface PersonResponse {
  page: number
  results: PersonResult[]
  total_pages: number
  total_results: number
}

export interface PersonResult {
  adult: boolean
  gender: number
  id: number
  known_for: KnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: null | string
}

export interface KnownFor {
  adult?: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  original_title?: string
  overview: string
  poster_path: string
  release_date?: Date
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  first_air_date?: Date
  name?: string
  origin_country?: string[]
  original_name?: string
}

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
