// Components
import { Sidebar, Panel, Table, Page, Heading } from "../components"

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
                    <Heading level={1} styles="h1--primary">
                      Variables
                    </Heading>
                  </div>
                  <div className="section_panel section_panel--left">
                    <Panel />
                  </div>
                </div>
                <div className="section_right">
                  <div className="section_right--header">
                    <Heading level={1} styles="h1--primary">
                      Results
                    </Heading>
                  </div>
                  <div className="section_panel section_panel--right">
                    <Panel>
                      <Table>
                        <Table.Heading
                          headings={[
                            <Table.Heading.Image
                              src="/public/static/images/stats.svg"
                              width={10}
                              height={10}
                            />,
                            <Table.Heading.Text>
                              <span className="span--tableHeading">
                                Player Name
                              </span>
                            </Table.Heading.Text>,
                            <Table.Heading.Text>
                              <span className="span--tableHeading">
                                GBS Score
                              </span>
                            </Table.Heading.Text>,
                            <Table.Heading.Text>
                              <span className="span--tableHeading">Odds</span>
                            </Table.Heading.Text>,
                            <Table.Heading.Text>
                              <span className="span--tableHeading">E/W</span>
                            </Table.Heading.Text>,
                          ]}
                        ></Table.Heading>
                        <Table.Body>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Daniel Berger
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">2084</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FFF" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">2</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Justin Rose
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">2001</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                          <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">
                                Patrick Cantlay
                              </span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">1894</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                            <Table.Cell.Text>
                              <span className="span--tableCell">3/1</span>
                            </Table.Cell.Text>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Panel>
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
