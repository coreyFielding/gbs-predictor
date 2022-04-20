import { useState } from "react"
import Variables from "../components/Variables"
import Results from "../components/Results"
import Image from "next/image"
import { Layout } from "../../components/common/Layout"
import { Footer } from "../../components/"
import { VariableProvider } from "contexts/VariableProvider"
import { PlayerProvider } from "contexts/PlayerProvider"

import {
  queryAllImportedTournaments,
  queryImportedTournament,
} from "../../lib/wordpress/posts/getImportedData.js"

const TournamentPage = (props) => {
  const [activeContent, setActiveContent] = useState("results")

  if (!props) return <></>

  return (
    <Layout>
      <section className="main-section">
        <div>
          <div className="content-toggle">
            <Image
              src={
                activeContent === "variables"
                  ? "/images/variablesOpen.svg"
                  : "/images/variablesClosed.svg"
              }
              alt="bookmaker"
              width={24}
              height={21}
              onClick={() =>
                setActiveContent((prev) =>
                  prev === "results" ? "variables" : "results"
                )
              }
            />
          </div>
          <VariableProvider>
            <div
              className={`section_left ${
                activeContent === "variables"
                  ? "showVariables"
                  : "hideVariables"
              }`}
            >
              <Variables hideHeading={true} />
            </div>

            <PlayerProvider>
              <Results show={activeContent === "results"} />
            </PlayerProvider>
          </VariableProvider>
        </div>
        <Footer />
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const tournament = await queryImportedTournament(params.id)

  return {
    props: {
      tournament,
    },
  }
}

export async function getStaticPaths() {
  const tournaments = await queryAllImportedTournaments()

  const paths = tournaments.map((tournament) => {
    const { id, Tournament_Name } = tournament.attributes
    return {
      params: {
        slug: Tournament_Name.toLowerCase().split(" ").join("-"),
        id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default TournamentPage
