// Components
import { Panel, Accordion, Table, Heading } from "../../../components"

// Contexts
import { useTournament } from "hooks/useTournament"

// Styles
import styles from "./variables.module.scss"
import { useEffect } from "react"

const Variables = () => {
  const { groups } = useTournament()

  useEffect(() => {
    console.log(groups)
  }, [groups])

  return !groups?.length > 0 ? (
    <></>
  ) : (
    <div className="section_left">
      <div className="header">
        <Heading level={1} styles="h1--primary">
          Variables
        </Heading>
      </div>
      <div className="panel panel_left">
        <Panel>
          <div className={styles.form}>
            <Accordion initial={groups[0].id} singular={true}>
              {groups?.map((groupItem) => {
                return (
                  <Accordion.Item
                    key={groupItem.id}
                    index={groupItem.id}
                    label={groupItem.groupName}
                    item={groupItem}
                    slider={true}
                  >
                    <Table>
                      <Table.Body>
                        {groupItem.variables?.map((variableItem) => {
                          return (
                            <Table.Row
                              key={variableItem.id}
                              className={styles.row}
                            >
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  {variableItem.variableName}
                                </span>
                              </Table.Cell>
                              <Table.Cell.Slider item={variableItem} />
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
