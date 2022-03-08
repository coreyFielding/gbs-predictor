// Components
import {
  Sidebar,
  Panel,
  Table,
  Page,
  Heading,
  Accordion,
  Filter,
  Button,
} from "../components"

// import displayComponents from "../functions/wordpress/displayComponents"
// import pagesComponentList from "../components/blocks/pages"
// import getAllPages from "../lib/wordpress/pages/getAllPages";

// Styles
import accordionStyles from "../components/molecules/Accordion/accordion.module.scss"
import toggleStyles from "../components/atoms/Filters/toggle/toggle.module.scss"
import Image from "next/image"

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
                  <div className="header">
                    <Heading level={1} styles="h1--primary">
                      Variables
                    </Heading>
                  </div>
                  <div className="panel panel_left">
                    <Panel>
                      <Accordion initial={1}>
                        <Accordion.Item
                          index={1}
                          label="Event form"
                          slider={true}
                        >
                          <Table>
                            <Table.Body>
                              <Table.Row className={accordionStyles.row}>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--accordionItem">
                                    OWGR
                                  </span>
                                </Table.Cell>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--tableCell">5</span>
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row className={accordionStyles.row}>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--accordionItem">
                                    Last Tournament
                                  </span>
                                </Table.Cell>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--tableCell">5</span>
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row className={accordionStyles.row}>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--accordionItem">
                                    Last But 1 Tournament
                                  </span>
                                </Table.Cell>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--tableCell">5</span>
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                        </Accordion.Item>
                        <Accordion.Item index={2} label="Current form">
                          <Table>
                            <Table.Body>
                              <Table.Row className={accordionStyles.row}>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--accordionItem">
                                    OWGR
                                  </span>
                                </Table.Cell>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--tableCell">5</span>
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row className={accordionStyles.row}>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--accordionItem">
                                    Last Tournament
                                  </span>
                                </Table.Cell>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--tableCell">5</span>
                                </Table.Cell>
                              </Table.Row>
                              <Table.Row className={accordionStyles.row}>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--accordionItem">
                                    Last But 1 Tournament
                                  </span>
                                </Table.Cell>
                                <Table.Cell className={accordionStyles.cell}>
                                  <span className="span--tableCell">5</span>
                                </Table.Cell>
                              </Table.Row>
                            </Table.Body>
                          </Table>
                        </Accordion.Item>
                      </Accordion>
                    </Panel>
                  </div>
                </div>
                <div className="section_right">
                  <div className="header">
                    <Heading level={1} styles="h1--primary">
                      Results
                    </Heading>
                    <div className="filters">
                      <div className="toggle">
                        <Filter.Toggle
                          label="DraftKings"
                          className={toggleStyles.toggle}
                        />
                      </div>

                      <div className="dropdown">
                        <Filter.Select options={[]} />
                      </div>
                    </div>
                  </div>
                  <div className="panel panel_right">
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <Image
                                  src={"/public/bookmaker.png"}
                                  width={500}
                                  height={500}
                                />
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
                            <Table.Cell.Text>
                              <Button.Pill
                                url="#"
                                label="test"
                                urlExternal={true}
                              >
                                <span>View Offer</span>
                              </Button.Pill>
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
