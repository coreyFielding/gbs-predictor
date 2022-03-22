// ReactSlider
import { useEffect, useState } from "react"
import ReactSlider from "react-slider"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = ({ item, children, parentValue, ...props }) => {
  const [value, setValue] = useState(0)

  const { title, include, range, weight } = item

  return (
    <div className={styles.container}>
      <ReactSlider
        className={styles.horizontalSlider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        value={!parentValue ? value : parentValue}
        onAfterChange={() => {
          handleVariableChange(item)
          // setFieldValue(name, !parentValue ? value : parentValue)
        }}
        max={range}
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
