// Components
import { Panel, Accordion, Table, Heading } from "../../../components"

// Contexts
import { useVariable } from "hooks/useVariable"

// Styles
import styles from "./variables.module.scss"

const Variables = () => {
  const { groups, openVariable } = useVariable(2)

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
            <Accordion singular={true} initial={1}>
              {groups?.map((groupItem) => {
                return (
                  <Accordion.Item
                    key={groupItem.id}
                    label={groupItem.parentName}
                    item={groupItem}
                    slider={true}
                  >
                    <Table>
                      <Table.Body>
                        {groupItem.childVariables?.map((variableItem) => {
                          return (
                            <Table.Row
                              key={variableItem.id}
                              className={styles.row}
                            >
                              <Table.Cell className={styles.cell}>
                                <span className="span--accordionItem">
                                  {variableItem.Child_Name}
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
