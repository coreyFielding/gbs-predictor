const pagesComponentList = {
  // exampleComponent: (component, index) => {
  //   return (
  //     !!component && (
  //
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
