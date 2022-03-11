// Components
import { Panel, Accordion, Table, Heading } from "../../../components"
import { Form } from "@/components/atoms/Form"

// Data
import { filters } from "./filters.json"

// Styles
import styles from "./variables.module.scss"

const initialValues = { ...filters }

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
            <Form initialValues={initialValues}>
              {({ setFieldValue, values }) => (
                <Accordion initial={1} singular={true}>
                  {filters.map(({ key, label: group, children }) => (
                    <Accordion.Item
                      key={key}
                      index={key}
                      label={group}
                      slider={true}
                      setFieldValue={setFieldValue}
                      values={values}
                    >
                      <Table>
                        <Table.Body>
                          {children?.map(({ name, label }) => {
                            return (
                              <Table.Row key={name} className={styles.row}>
                                <Table.Cell className={styles.cell}>
                                  <span className="span--accordionItem">
                                    {label}
                                  </span>
                                </Table.Cell>
                                <Table.Cell.Slider
                                  name={name}
                                  setFieldValue={setFieldValue}
                                  parentValue={values[group]}
                                />
                              </Table.Row>
                            )
                          })}
                        </Table.Body>
                      </Table>
                    </Accordion.Item>
                  ))}
                </Accordion>
              )}
            </Form>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Variables
