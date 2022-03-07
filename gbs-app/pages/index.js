// Components
import { Header, Footer, Sidebar, Panel, Page } from "../components"

// import displayComponents from "../functions/wordpress/displayComponents"
// import pagesComponentList from "../components/blocks/pages"
// import getAllPages from "../lib/wordpress/pages/getAllPages";

//* Example component data which would normally be fetched from an API call
// import { exampleComponentData } from "../lib/wordpress/pages/exampleComponentData"

const Home = () => {
  return (
    <Page seo={{ title: "Golf Betting Predictor" }}>
      <div className="page">
        <div className="wrapper">
          <main className="main">
            <Sidebar />
            <section>
              <div>
                <div className="section_left">
                  <div className="section_left--header">
                    <h1 className="h1--primary">Variables</h1>
                  </div>
                  <div className="section_panel section_panel--left">
                    <Panel />
                  </div>
                </div>
                <div className="section_right">
                  <div className="section_right--header">
                    <h1 className="h1--primary">Results</h1>
                  </div>
                  <div className="section_panel section_panel--right">
                    <Panel />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      {/* {displayComponents(exampleComponentData, pagesComponentList)} */}
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
