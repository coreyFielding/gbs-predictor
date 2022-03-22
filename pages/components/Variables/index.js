// Components
import { Panel, Accordion, Table, Heading } from "../../../components"

// Contexts
import { useVariableContext } from "../../../contexts/VariableProvider"

// Styles
import styles from "./variables.module.scss"

const Variables = () => {
  const { mappedVariables, handleVariableChange } = useVariableContext()

  console.log(values)

  "Long_Game": [
    {
      "Filter_Group_Name": "Long Game",
      "Group_Range": 10
    },
    {
      "id": 10,
      "Sub_Cat_02_Title": "Last But 1 Tournament",
      "Sub_Cat_02_Include": true,
      "filter_group": null,
      "Sub_Cat_Weight": 7
    },
    {
      "Sub_Cat_02_Title": "Last But 2 Tournament",
      "Sub_Cat_02_Include": true,
      "filter_group": null,
      "Sub_Cat_Weight": null
    },
    {
      "Sub_Cat_02_Title": "Last But 3 Tournament",
      "Sub_Cat_02_Include": true,
      "filter_group": null,
      "Sub_Cat_Weight": null
    }
  ]
    
    const mappedFilters = {
        categories: [
            {
                long_game: {
                index: 0,
                range: 10, 
                sub_categories: [
                    { index: 0, title: "Last tournament", include: true, weight: 7, parent: "long_game", parent_index: 0 },
                    { index: 1, title: "Last but 1 tournament", include: false, weight: 3, parent: "long_game"}
                ]
            }
            }
        ]
    }
  
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
              {categories.map((item) => {
                return (
                  <Accordion.Item
                    key={index}
                    index={index}
                    label={title}
                    item={item}
                    slider={true}
                  >
                    <Table>
                      <Table.Body>
                        {item.sub_cats?.map(
                          (item) => {
                            return (
                              <Table.Row key={item.title} className={styles.row}>
                                <Table.Cell className={styles.cell}>
                                  <span className="span--accordionItem">
                                    {item.title}
                                  </span>
                                </Table.Cell>
                                <Table.Cell.Slider
                                  item={item}
                                  // parentValue={values[name]}
                                />
                              </Table.Row>
                            )
                          }
                        )}
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
