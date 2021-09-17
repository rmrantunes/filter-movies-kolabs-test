import { GetServerSideProps } from 'next'
import IndexTemplate, { IndexTemplateProps } from 'templates/index'
import { responseMock } from 'templates/index/mock'
import { extractYearFromQuery } from 'utils/extractYearFromQuery'

type IndexPageProps = IndexTemplateProps

export default function IndexPage(props: IndexPageProps) {
  return <IndexTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async (
  ctx
) => {
  const MOVIES_DB_API_KEY = process.env.MOVIES_DB_API_KEY

  const { query, year } = extractYearFromQuery(ctx.query.query as string)

  const API_URL =
    `https://api.themoviedb.org/3/search/multi?api_key=${MOVIES_DB_API_KEY}&query=${query}&page=1` +
    `${year ? `&year=${year}` : ''}`

  // return { props: { response: responseMock } }

  const response = await fetch(API_URL)
  const data = await response.json()

  return {
    props: {
      response: data
    }
  }
}
