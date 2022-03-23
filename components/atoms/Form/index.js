import { createContext, useContext } from "react"
import { Formik } from "formik"

// Data
import { filters } from "../../../pages/components/Variables/filters.json"

export const FormContext = createContext({})
export const useFormContext = () => useContext(FormContext)

export const Form = ({ children, styles: userStyles, ...formikProps }) => {
  return (
    <Formik {...formikProps} initialValues={initialValues}>
      {(formik) => {
        const { values, setFieldValue } = formik
        return (
          <FormContext.Provider
            value={{ values, setFieldValue, initialValues }}
          >
            <form>{children}</form>
          </FormContext.Provider>
        )
      }}
    </Formik>
  )
}
