import { Formik } from "formik"

export const Form = ({ children, styles: userStyles, ...formikProps }) => {
  return (
    <Formik {...formikProps}>
      {(formik) => <form>{children(formik)}</form>}
    </Formik>
  )
}
