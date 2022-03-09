const switchFn = (lookupObject, defaultCase = "_default") => (
  expression,
  index
) =>
  (lookupObject[expression.acf_fc_layout] || lookupObject[defaultCase])(
    expression,
    index
  );

export default switchFn;
