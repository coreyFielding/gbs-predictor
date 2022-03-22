// Components
import { Sidebar, Page, Header, Footer, Form } from "../components"

import Variables from "./components/Variables"
import Results from "./components/Results"

// Contexts

// Styles
import Image from "next/image"

//* Example component data which would normally be fetched from an API call

const Home = () => {
  return (
    <Page seo={{ title: "GBS Predictor" }}>
      <div className="page">
        <div className="wrapper">
          <main className="main">
            <Sidebar />
            <section className="main-section">
              <div>
                <Variables />
                <Results />
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
  // console.log(pages);

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
