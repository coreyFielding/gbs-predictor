// ReactSlider
import { useEffect, useState } from "react"
import ReactSlider from "react-slider"
import { useVariable } from "hooks/useVariable"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = ({ item, children, ...props }) => {
  const [value, setValue] = useState(item.parentWeight | item.childWeight)

  useEffect(() => {}, [item])

  const { handleVariableChange } = useVariable()

  useEffect(() => {
    item.childWeight ? setValue(item.childWeight) : setValue(item.parentWeight)
  }, [item.parentWeight, item.childWeight])

  return (
    <div className={styles.container}>
      <ReactSlider
        className={styles.horizontalSlider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        value={value}
        onAfterChange={() => {
          handleVariableChange(item, value)
        }}
        max={item.parentRange || item.childRange}
        renderThumb={(props, state) => {
          setValue(state.value)
          return (
            <>
              <span className={`${styles.value} span--accordionHeading`}>
                {state.value}
              </span>
              <div {...props}></div>
            </>
          )
        }}
      />
    </div>
  )
}
