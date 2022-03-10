// Components
import { Panel, Button, Table, Heading, Filter } from "../../../components"

const Results = () => {
  return (
    <div className="section_right">
      <div className="header">
        <Heading level={1} styles="h1--primary">
          Results
        </Heading>
        <div className="filters">
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="4.16699" x2="23.8" y2="4.16699" stroke="#3CD176"/>
            <line y1="11.2012" x2="23.8" y2="11.2012" stroke="#3CD176"/>
            <line y1="18.2363" x2="23.8" y2="18.2363" stroke="#3CD176"/>
            <circle cx="5.23503" cy="3.33366" r="2.66667" fill="#3CD176"/>
            <circle cx="18.5671" cy="11.3337" r="2.66667" fill="#3CD176"/>
            <circle cx="10.5671" cy="18.0007" r="2.66667" fill="#3CD176"/>
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
              headings={[
                // <Table.Heading.Image
                //   src="/public/static/images/stats.svg"
                //   width={10}
                //   height={10}
                // />,
                <Table.Heading.Text key={1}>
                  <span className="span--tableHeading">Player Name</span>
                </Table.Heading.Text>,
                <Table.Heading.Text key={2}>
                  <span className="span--tableHeading">GBS Score</span>
                </Table.Heading.Text>,
                <Table.Heading.Text key={3}>
                  <span className="span--tableHeading">Odds</span>
                </Table.Heading.Text>,
                <Table.Heading.Text key={4}>
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
                  <span className="span--tableCell">Daniel Berger</span>
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
