// Components
import { Panel, Button, Table, Heading, Filter } from "../../../components"
import { usePlayers } from "../../../hooks/usePlayers"

const Results = ({ show }) => {
  const {
    sortedPlayerList,
    bookmakers,
    selectedBookmaker,
    filterPlayersByBookmaker,
  } = usePlayers()

  const bookmakerImg = [
    "888_Sport",
    "Bet365",
    "Ladbrokes",
    "Betfair",
    "Coral",
    "William_Hill",
    "DraftKings",
  ]

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
        Component: () => <Table.Heading.Text key={3} text="Score" />,
      },
      {
        accessor: "odds",
        devices: ["all"],
        Component: () => <Table.Heading.Text key={4} text="Odds" />,
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
        <Heading
          level={1}
          className={`h1--primary ${!show && "minimiseResults"}`}
        >
          Results
        </Heading>

        <div className="filters">
          <div className="toggle">
            <Filter.Toggle
              label="DraftKings"
              handlePlayersByBookmaker={filterPlayersByBookmaker}
            />
          </div>

          <div className="dropdown">
            <Filter.Select
              options={bookmakers}
              handlePlayersByBookmaker={filterPlayersByBookmaker}
            />
          </div>
        </div>
      </div>
      <div
        className={`panel panel_right ${
          show ? "showResults" : "minimiseResults"
        }`}
      >
        <Panel>
          <Table>
            <Table.Heading
              headings={table.headers?.map(({ Component }, index) => (
                <Component key={index} />
              ))}
            />
            <Table.Body>
              {(sortedPlayerList ? sortedPlayerList : [])?.map(
                (player, index) => (
                  <Table.Row key={index}>
                    <Table.Cell.Text>
                      <span className="span--tableCell">{index + 1}</span>
                    </Table.Cell.Text>
                    <Table.Cell.Text>
                      <span className="span--tableCell">{player.Player}</span>
                    </Table.Cell.Text>
                    <Table.Cell.Text>
                      <span className="span--tableCell">{player?.score}</span>
                    </Table.Cell.Text>
                    <Table.Cell.Text>
                      <span className="span--tableCell">{player.odds}</span>
                    </Table.Cell.Text>
                    <Table.Cell.Text>
                      <span className="span--tableCell">3/1</span>
                    </Table.Cell.Text>
                    <Table.Cell.Text>
                      <Button.Pill
                        url="#"
                        label="test"
                        urlExternal={true}
                        image={bookmakerImg.find(
                          (v) => v === selectedBookmaker.split(" ").join("_")
                        )}
                      >
                        <span>View Offer</span>
                      </Button.Pill>
                    </Table.Cell.Text>
                  </Table.Row>
                )
              )}
            </Table.Body>
          </Table>
        </Panel>
      </div>
    </div>
  )
}

export default Results
