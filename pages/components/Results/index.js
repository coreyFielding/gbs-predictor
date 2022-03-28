// Components
import { Panel, Button, Table, Heading, Filter } from "../../../components"
import { PlayerContext } from "contexts/PlayerProvider"
import { useContext } from "react"

const Results = () => {
  const { players } = useContext(PlayerContext)
  console.log(players)
  const table = {
    headers: [
      {
        accessor: "position",
        devices: ["all"],
        Component: () => (
          <Table.Heading.Image
            key={1}
            src="/public/static/images/stats.svg"
            width={10}
            height={10}
          />
        ),
      },
      {
        accessor: "name",
        devices: ["all"],
        Component: () => <Table.Heading.Text key={2} text="Player Name" />,
      },
      {
        accessor: "score",
        devices: ["all"],
        Component: () => <Table.Heading.Dropdown key={3} label="GBS Score" />,
      },
      {
        accessor: "odds",
        devices: ["all"],
        Component: () => <Table.Heading.Dropdown key={4} label="Odds" />,
      },
      {
        accessor: "eachWay",
        devices: ["all"],
        Component: () => <Table.Heading.Text key={5} text="E/W" />,
      },
      {
        accessor: "draftKings",
        Component: () => <Table.Heading.Dropdown key={4} label="DraftKings" />,
        devices: ["tablet", "mobile"],
      },
    ],
  }
  return (
    <div className="section_right">
      <div className="header">
        <Heading level={1} styles="h1--primary">
          Results
        </Heading>
        <div className="filters">
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="show_variables"
          >
            <line y1="4.16699" x2="23.8" y2="4.16699" stroke="#fff" />
            <line y1="11.2012" x2="23.8" y2="11.2012" stroke="#fff" />
            <line y1="18.2363" x2="23.8" y2="18.2363" stroke="#fff" />
            <circle cx="5.23503" cy="3.33366" r="2.66667" fill="#fff" />
            <circle cx="18.5671" cy="11.3337" r="2.66667" fill="#fff" />
            <circle cx="10.5671" cy="18.0007" r="2.66667" fill="#fff" />
          </svg>

          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hide_variables"
          >
            <path
              d="M1.6875 15.2507L22.2182 2.10254"
              stroke="#fff"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M1.6875 2.125L22.2184 15.3474"
              stroke="#fff"
              stroke-width="3"
              stroke-linecap="round"
            />
            <circle cx="7.0105" cy="5.2605" r="2.5105" fill="#fff" />
            <circle cx="16.3855" cy="11.5105" r="2.5105" fill="#fff" />
          </svg>

          <div className="toggle">
            <Filter.Toggle label="DraftKings" />
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
              headings={table.headers.map(({ Component }, index) => (
                <Component key={index} />
              ))}
            />
            <Table.Body>
              {players.data.map((player, index) => (
                <Table.Row key={index} style={{ backgroundColor: "#FBFFFD" }}>
                  <Table.Cell.Text>
                    <span className="span--tableCell">1</span>
                  </Table.Cell.Text>
                  <Table.Cell.Text>
                    <span className="span--tableCell">{player.Player}</span>
                  </Table.Cell.Text>
                  <Table.Cell.Text>
                    <span className="span--tableCell">2084</span>
                  </Table.Cell.Text>
                  <Table.Cell.Text>
                    <span className="span--tableCell">{player.Odds}</span>
                  </Table.Cell.Text>
                  <Table.Cell.Text>
                    <span className="span--tableCell">3/1</span>
                  </Table.Cell.Text>
                  <Table.Cell.Text>
                    <Button.Pill url="#" label="test" urlExternal={true}>
                      {/* <Image
                      src={"/public/bookmaker.png"}
                      width={500}
                      height={500}
                    /> */}
                      <span>View Offer</span>
                    </Button.Pill>
                  </Table.Cell.Text>
                </Table.Row>
              ))}

              <Table.Row style={{ backgroundColor: "#FFF" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">2</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Justin Rose</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
              <Table.Row style={{ backgroundColor: "#FBFFFD" }}>
                <Table.Cell.Text>
                  <span className="span--tableCell">3</span>
                </Table.Cell.Text>
                <Table.Cell.Text>
                  <span className="span--tableCell">Patrick Cantlay</span>
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
                  <Button.Pill url="#" label="test" urlExternal={true}>
                    <span>View Offer</span>
                  </Button.Pill>
                </Table.Cell.Text>
              </Table.Row>
            </Table.Body>
          </Table>
        </Panel>
      </div>
    </div>
  )
}

export default Results
