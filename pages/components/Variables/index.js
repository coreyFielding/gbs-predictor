// Components
import { Panel, Accordion, Table, Heading } from "../../../components"

// Styles
import styles from "./variables.module.scss"

export const Variables = () => {
  return (
    <div className="section_left">
      <div className="header">
        <Heading level={1} styles="h1--primary">
          Variables
        </Heading>
      </div>
      <div className="panel panel_left">
        <Panel>
          <Accordion initial={1}>
            <Accordion.Item index={1} label="Event form" slider={true}>
              <Table>
                <Table.Body>
                  <Table.Row className={styles.row}>
                    <Table.Cell className={styles.cell}>
                      <span className="span--accordionItem">OWGR</span>
                    </Table.Cell>
                    <Table.Cell className={styles.cell}>
                      <span className="span--tableCell">5</span>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className={styles.row}>
                    <Table.Cell className={styles.cell}>
                      <span className="span--accordionItem">
                        Last Tournament
                      </span>
                    </Table.Cell>
                    <Table.Cell className={styles.cell}>
                      <span className="span--tableCell">5</span>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className={styles.row}>
                    <Table.Cell className={styles.cell}>
                      <span className="span--accordionItem">
                        Last But 1 Tournament
                      </span>
                    </Table.Cell>
                    <Table.Cell className={styles.cell}>
                      <span className="span--tableCell">5</span>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Accordion.Item>
            <Accordion.Item index={2} label="Current form">
              <Table>
                <Table.Body>
                  <Table.Row className={styles.row}>
                    <Table.Cell className={styles.cell}>
                      <span className="span--accordionItem">OWGR</span>
                    </Table.Cell>
                    <Table.Cell className={styles.cell}>
                      <span className="span--tableCell">5</span>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className={styles.row}>
                    <Table.Cell className={styles.cell}>
                      <span className="span--accordionItem">
                        Last Tournament
                      </span>
                    </Table.Cell>
                    <Table.Cell className={styles.cell}>
                      <span className="span--tableCell">5</span>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row className={styles.row}>
                    <Table.Cell className={styles.cell}>
                      <span className="span--accordionItem">
                        Last But 1 Tournament
                      </span>
                    </Table.Cell>
                    <Table.Cell className={styles.cell}>
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
  )
}
