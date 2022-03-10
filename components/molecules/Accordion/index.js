import {
  useContext,
  createContext,
  useState,
  createRef,
  useEffect,
} from "react"

// Components
import { Heading, SliderFilter } from "../../"

// Styles
import styles from "./accordion.module.scss"
import cn from "classnames"

export const AccordionContext = createContext({})

const AccordionComponent = ({
  initial,
  children,
  singular = false,
  styles: userStyles,
  ...rest
}) => {
  const [openItems, setOpenItems] = useState(initial ? [initial] : [])

  const open = (index) => {
    setOpenItems((currentOpen) => {
      if (!currentOpen?.includes(index)) {
        return [...(!singular ? currentOpen : []), index]
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
        return [...(!singular ? currentOpen : []), index]
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
        singular,
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({
  label,
  slider,
  children,
  index,
  setFieldValue,
  ...rest
}) => {
  const { openItems, toggle } = useContext(AccordionContext)
  const isOpen = index && openItems?.includes(index)
  const headerClasses = cn(styles.heading, isOpen && styles.toggleOpen)
  const contentClasses = cn(styles.content, isOpen && styles.contentVisible)
  const sliderRef = createRef()

  return (
    <div {...rest} className={styles.item}>
      <div
        className={headerClasses}
        onClick={(event) => {
          index && !sliderRef?.current?.contains(event.target) && toggle(index)
        }}
      >
        <div className={styles.container}>
          <Heading level={6} className="span--accordionHeading">
            {label}
          </Heading>
        </div>

        {!!slider && (
          <div ref={sliderRef} className={styles.slider}>
            <SliderFilter name={label} setFieldValue={setFieldValue} />
          </div>
        )}
        <div className={styles.toggle}>{/* <ToggleIcon /> */}</div>
      </div>

      <div className={contentClasses}>{children}</div>
    </div>
  )
}

AccordionComponent.Item = AccordionItem

export const Accordion = AccordionComponent
