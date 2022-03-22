// Components
import { Panel, Accordion, Table, Heading } from "../../../components"

// Contexts
import { useTournament } from "hooks/useTournament"

// Styles
import styles from "./variables.module.scss"

const Variables = () => {
  const { filters, handleVariableChange } = useTournament()

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
            <Accordion initial={1} singular={true}>
              {filters?.map((item) => {
                return (
                  <Accordion.Item
                    key={item.id}
                    index={item.id}
                    label={item.groupName}
                    item={item}
                    slider={true}
                  >
                    <Table>
                      <Table.Body>
                        {item.variables?.map((item) => {
                          return (
                            <Table.Row key={item.id} className={styles.row}>
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  {item.variableName}
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider
                                item={item}
                                // parentValue={values[name]}
                              />
                            </Table.Row>
                          )
                        })}
                      </Table.Body>
                    </Table>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Variables
