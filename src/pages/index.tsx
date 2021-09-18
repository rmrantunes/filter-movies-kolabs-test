import { GetServerSideProps } from 'next'
import IndexTemplate from 'templates/index'
import { MovieDBMultiResponse } from 'types/themoviedb-response'
import { extractYearFromQuery } from 'utils/extractYearFromQuery'

type IndexPageProps = { response: MovieDBMultiResponse }

export default function IndexPage(props: IndexPageProps) {
  return <IndexTemplate />
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  if (!ctx.query.query)
    return {
      props: { response: { results: [] } }
    }

  const MOVIES_DB_API_KEY = process.env.MOVIES_DB_API_KEY

  const { query, year } = extractYearFromQuery(ctx.query.query as string)

  const API_URL =
    `https://api.themoviedb.org/3/search/multi?api_key=${MOVIES_DB_API_KEY}&query=${query}&page=1` +
    `${year ? `&year=${year}` : ''}`

  const response = await fetch(API_URL)
  const data = await response.json()

  return {
    props: {
      response: data
    }
  }
}
