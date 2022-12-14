// Components
import { Loading } from "@/components/atoms/Loading"
import { Panel, Button, Table, Heading, Filter } from "../../../components"
import { usePlayers } from "../../../hooks/usePlayers"

const Results = ({ show }) => {
  const bookmakerUrl = "https://www.golfbettingsystem.co.uk/bookmakers/"
  const {
    playerList,
    sortedPlayerList,
    bookmakers,
    selectedBookmaker,
    sortOrder,
    isLoading,
    sortPlayersByColumn,
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
        accessor: "Position",
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
        accessor: "Player",
        Component: () => (
          <Table.Heading.Sort
            key={2}
            text="Player"
            sortOrder={sortOrder}
            handleSortByColumn={sortPlayersByColumn}
          />
        ),
      },
      {
        accessor: "score",
        Component: () => (
          <Table.Heading.Sort
            key={3}
            text="Score"
            sortOrder={sortOrder}
            handleSortByColumn={sortPlayersByColumn}
          />
        ),
      },
      {
        accessor: "odds",
        Component: () =>
          selectedBookmaker !== "DraftKings" && (
            <Table.Heading.Text key={4} text="Odds" />
          ),
      },
      {
        accessor: "eachWay",
        Component: () =>
          selectedBookmaker !== "DraftKings" && (
            <Table.Heading.Text key={5} text="E/W" />
          ),
      },
      {
        accessor: "draftKings",
        Component: () =>
          selectedBookmaker === "DraftKings" && (
            <Table.Heading.Sort
              key={4}
              text="DraftKings"
              sortOrder={sortOrder}
              handleSortByColumn={sortPlayersByColumn}
            />
          ),
      },
      {
        accessor: "draftKings",
        Component: () => <Table.Heading.Text key={5} text="" />,
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
              selectedBookmaker={selectedBookmaker}
              handlePlayersByBookmaker={filterPlayersByBookmaker}
            />
          </div>

          <div className="dropdown">
            <Filter.Select
              options={bookmakers}
              selectedBookmaker={selectedBookmaker}
              handlePlayersByBookmaker={filterPlayersByBookmaker}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
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
                {(sortedPlayerList?.length
                  ? sortedPlayerList
                  : playerList
                )?.map((player, index) => (
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
                    {selectedBookmaker !== "DraftKings" ? (
                      <>
                        <Table.Cell.Text>
                          <span className="span--tableCell">{player.odds}</span>
                        </Table.Cell.Text>
                        <Table.Cell.Text>
                          <span className={`span--tableCell hideEachWay`}>
                            3/1
                          </span>
                        </Table.Cell.Text>
                      </>
                    ) : (
                      <Table.Cell.Text>
                        <span className="span--tableCell">
                          {Intl.NumberFormat().format(player.odds)}
                        </span>
                      </Table.Cell.Text>
                    )}

                    <Table.Cell.Text>
                      <Button.Pill
                        url={`${bookmakerUrl}${selectedBookmaker
                          ?.split(" ")
                          .join("-")}`}
                        urlExternal={true}
                        image={bookmakerImg.find(
                          (v) => v === selectedBookmaker.split(" ").join("_")
                        )}
                      >
                        <span>View Offer</span>
                      </Button.Pill>
                    </Table.Cell.Text>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Panel>
        </div>
      )}
    </div>
  )
}

export default Results
