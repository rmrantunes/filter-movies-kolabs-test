import { GetServerSideProps } from 'next'
import IndexTemplate, { IndexTemplateProps } from 'templates/index'
import { responseMock } from 'templates/index/mock'

type IndexPageProps = IndexTemplateProps

export default function IndexPage(props: IndexPageProps) {
  return <IndexTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({
  query
}) => {
  const MOVIES_DB_API_KEY = process.env.MOVIES_DB_API_KEY
  const API_URL = `https://api.themoviedb.org/3/search/multi?api_key=${MOVIES_DB_API_KEY}&query=${query.query}&page=1`

  return { props: { response: responseMock } }

  const response = await fetch(API_URL)
  const data = await response.json()

  return {
    props: {
      response: data
    }
  }
}
