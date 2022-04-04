import {
  useContext,
  createContext,
  useState,
  createRef,
  useEffect,
} from "react"

// Components
import Image from "next/image"
import { Heading, SliderFilter } from "../../"

// Styles
import styles from "./accordion.module.scss"
import cn from "classnames"
import { useVariable } from "hooks/useVariable"

export const AccordionContext = createContext({})

const AccordionComponent = ({
  initial,
  children,
  singular = true,
  handleVariableChange,
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

const AccordionItem = ({ item, slider, children, ...rest }) => {
  const { openItems, toggle } = useContext(AccordionContext)
  const { id, parentName } = item
  const isOpen = id && openItems?.includes(id)
  const headerClasses = cn(styles.heading, isOpen && styles.toggleOpen)
  const contentClasses = cn(styles.content, isOpen && styles.contentVisible)
  const sliderRef = createRef()

  return (
    <div {...rest} className={styles.item}>
      <div
        className={headerClasses}
        onClick={(event) => {
          id && !sliderRef?.current?.contains(event.target) && toggle(id)
        }}
      >
        <div className={styles.container}>
          <Heading level={6} className="span--accordionHeading">
            {parentName}
          </Heading>
        </div>

        {!!slider && (
          <div ref={sliderRef} className={styles.slider}>
            <SliderFilter item={item} />
          </div>
        )}
        <div className={styles.toggle}>
          <Image
            src="/images/accordionToggle.svg"
            alt="toggle"
            width={13}
            height={10}
            className={isOpen ? styles.toggleIconOpen : styles.toggleIconClosed}
          />
        </div>
      </div>

      <div className={contentClasses}>{children}</div>
    </div>
  )
}

AccordionComponent.Item = AccordionItem

export const Accordion = AccordionComponent
