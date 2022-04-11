// Components
import { Panel, Accordion, Table, Heading } from "../../../components"

// Contexts
import { useVariable } from "hooks/useVariable"

// Styles
import styles from "./variables.module.scss"

const Variables = ({ hideHeading }) => {
  const { groups } = useVariable()

  const activeVariable = groups?.find((group) => group.active)

  return !groups?.length > 0 ? (
    <></>
  ) : (
    <div className="section_left">
      <div className="header">
        <Heading
          level={1}
          styles="h1--primary"
          className={`h1--primary ${hideHeading && "hideHeading"}`}
        >
          Variables
        </Heading>
      </div>
      <div className="panel panel_left">
        <Panel>
          <div>
            <Accordion singular={true} initial={activeVariable?.id || 1}>
              {groups?.map((groupItem) => {
                return (
                  <Accordion.Item
                    key={groupItem.id}
                    label={groupItem.parentName}
                    item={groupItem}
                    slider={true}
                    active={groupItem.active}
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
