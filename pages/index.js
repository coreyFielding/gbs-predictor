// Components
import { queryAllImportedTournaments } from "lib/wordpress/posts/getImportedData"
import Page from "../components/common/Page"

const Home = ({ allTournaments }) => {
  return (
    <Page seo={{ title: "GBS Predictor" }} allTournaments={allTournaments} />
  )
}

export default Home

export async function getStaticProps() {
  const allTournaments = await queryAllImportedTournaments()

  if (!allTournaments) {
    return {
      notFound: true,
    }
  }

  return {
    props: { allTournaments },
  }
}
