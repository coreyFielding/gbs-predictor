const getPagesComponents = (components) => {
  components
    ? components.map(async (component) => {
        switch (component.acf_fc_layout) {
          case "ExampleComponent":
            break;
        }
      })
    : console.log("Component data not loading");
  return;
};

export default getPagesComponents;
