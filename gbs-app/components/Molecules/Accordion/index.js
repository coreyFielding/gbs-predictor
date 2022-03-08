import { useContext, createContext, useState } from "react"

// Components
import { Heading, SliderFilter } from "../../"
import ToggleIcon from "public/images/icons/toggle.svg"

// Styles
import styles from "./accordion.module.scss"
import cn from "classnames"

export const AccordionContext = createContext({})

const AccordionComponent = ({
  initial,
  children,
  styles: userStyles,
  ...rest
}) => {
  const [openItems, setOpenItems] = useState(initial ? [initial] : [])

  const open = (index) => {
    setOpenItems((currentOpen) => {
      if (!currentOpen?.includes(index)) {
        return [...currentOpen, index]
      }

      return currentOpen
    })
  }

  const close = (index) => {
    setOpenItems((currentOpen) => currentOpen.filter((i) => i !== index))
  }

  const toggle = (index) => {
    setOpenItems((currentOpen) => {
      if (!currentOpen?.includes(index)) {
        return [...currentOpen, index]
      }

      return currentOpen.filter((i) => i !== index)
    })
  }

  return (
    <AccordionContext.Provider
      value={{
        initial,
        openItems,
        setOpenItems,
        open,
        close,
        toggle,
      }}
    >
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ label, slider, children, index, ...rest }) => {
  const { openItems, toggle } = useContext(AccordionContext)

  const isOpen = index && openItems?.includes(index)

  const headerClasses = cn(styles.heading, isOpen && styles.toggleOpen)
  const contentClasses = cn(styles.content, isOpen && styles.contentVisible)

  return (
    <div {...rest} className={styles.item}>
      <div className={headerClasses} onClick={() => index && toggle(index)}>
        <Heading level={6} className="span--accordionHeading">
          {label}
        </Heading>
        {/* {!!slider && <SliderFilter />} */}

        <div className={styles.toggle}>{/* <ToggleIcon /> */}</div>
      </div>

      <div className={contentClasses}>{children}</div>
    </div>
  )
}

AccordionComponent.Item = AccordionItem

export const Accordion = AccordionComponent
