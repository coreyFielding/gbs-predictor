// Components
import { Sidebar, Page, Footer } from "../components"
import Image from "next/image"

import Variables from "./components/Variables"
import Results from "./components/Results"

// Styles
import { VariableProvider } from "contexts/VariableProvider"
import { PlayerProvider } from "contexts/PlayerProvider"
import { useState } from "react"

//* Example component data which would normally be fetched from an API call

const Home = () => {
  const [activeContent, setActiveContent] = useState("results")

  return (
    <Page seo={{ title: "GBS Predictor" }}>
      <div className="page">
        <div className="wrapper">
          <main className="main">
            <Sidebar />
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
                    <Variables />
                  </div>

                  <PlayerProvider>
                    <Results show={activeContent === "results"} />
                  </PlayerProvider>
                </VariableProvider>
              </div>
              <Footer />
            </section>
          </main>
        </div>
      </div>
    </Page>
  )
}

export default Home

export async function getStaticProps(context) {
  //* Example of how to fetch data
  // const pages = await getAllPages();

  //* Example of how to pass menu props to the Wordpress Provider in the _app.js
  const menus = {
    primary: [{ label: "About", url: "/about" }],
    secondary: [{ label: "Contact", url: "/contact" }],
  }

  //* Example of how to render 404 on static pages
  if (!menus) {
    return {
      notFound: true,
    }
  }

  //* This will be passed to the page component as props
  return {
    props: { menus },
  }
}
