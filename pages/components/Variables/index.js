// Components
import { Panel, Accordion, Table, Heading } from "../../../components"
import { Form } from "@/components/atoms/Form"

// Styles
import styles from "./variables.module.scss"

const Variables = () => {
  return (
    <div className="section_left">
      <div className="header">
        <Heading level={1} styles="h1--primary">
          Variables
        </Heading>
      </div>
      <div className="panel panel_left">
        <Panel>
          <div className={styles.form}>
            <Form initialValues={{}}>
              {({ setFieldValue, values }) => {
                console.log(values)
                return (
                  <Accordion initial={1} singular={true}>
                    <>
                      <Accordion.Item
                        index={1}
                        label="Event form"
                        slider={true}
                        setFieldValue={setFieldValue}
                        values={values}
                      >
                        <Table>
                          <Table.Body>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  OWGR
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="OWGR"
                                setFieldValue={setFieldValue}
                                parentValue={values["Event form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last Tournament
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last Tournament"
                                setFieldValue={setFieldValue}
                                parentValue={values["Event form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 1 Tournament
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 1 Tournament"
                                setFieldValue={setFieldValue}
                                parentValue={values["Event form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 2 Tournament
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 2 Tournament"
                                setFieldValue={setFieldValue}
                                parentValue={values["Event form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 3 Tournament
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 3 Tournament"
                                setFieldValue={setFieldValue}
                                parentValue={values["Event form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 4 Tournament
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 4 Tournament"
                                setFieldValue={setFieldValue}
                                parentValue={values["Event form"]}
                              />
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </Accordion.Item>
                      <Accordion.Item
                        label="Current form"
                        index={2}
                        slider={true}
                        setFieldValue={setFieldValue}
                        values={values}
                      >
                        <Table>
                          <Table.Body>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  OWGR 1
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="OWGR 1"
                                setFieldValue={setFieldValue}
                                parentValue={values["Current form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last Tournament 1
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last Tournament 1"
                                setFieldValue={setFieldValue}
                                parentValue={values["Current form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 1 Tournament 1
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 1 Tournament 1"
                                setFieldValue={setFieldValue}
                                parentValue={values["Current form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 2 Tournament 1
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 2 Tournament 1"
                                setFieldValue={setFieldValue}
                                parentValue={values["Current form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 3 Tournament 1
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 3 Tournament 1"
                                setFieldValue={setFieldValue}
                                parentValue={values["Current form"]}
                              />
                            </Table.Row>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  Last But 4 Tournament 1
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                name="Last But 4 Tournament 1"
                                setFieldValue={setFieldValue}
                                parentValue={values["Current form"]}
                              />
                            </Table.Row>
                          </Table.Body>
                        </Table>
                      </Accordion.Item>
                      <Accordion.Item index={3} label="Long Game">
                        <Table>
                          <Table.Body>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  OWGR
                                </span>
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
                      <Accordion.Item index={4} label="Short Game">
                        <Table>
                          <Table.Body>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  OWGR
                                </span>
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
                      <Accordion.Item index={5} label="Scoring">
                        <Table>
                          <Table.Body>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  OWGR
                                </span>
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
                      <Accordion.Item index={6} label="Event Specific">
                        <Table>
                          <Table.Body>
                            <Table.Row className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  OWGR
                                </span>
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
                    </>
                  </Accordion>
                )
              }}
            </Form>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Variables
