import ComponentExample from "../flexible-content/ComponentExample"

const pagesComponentList = {
  // exampleComponent: (component, index) => {
  //   return (
  //     !!component && (
  //       <ComponentExample
  //         key={index}
  //         title={component.title}
  //         text={component.text}
  //       />
  //     )
  //   )
  // },
  default: (component, index) => {
    console.log(
      `The component :: ${component.acf_fc_layout} has content available for this page but no component to render in position :: ${index}`,
      index
    )
  },
}

export default pagesComponentList
