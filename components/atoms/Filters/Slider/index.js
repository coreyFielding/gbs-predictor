// ReactSlider
import { useEffect, useState } from "react"
import ReactSlider from "react-slider"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = ({
  name,
  setFieldValue,
  override,
  children,
  parentValue,
  values,
  ...props
}) => {
  const [value, setValue] = useState(0)

  return (
    <div className={styles.container}>
      <ReactSlider
        className={styles.horizontalSlider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        value={!parentValue ? value : parentValue}
        onAfterChange={() => {
          setFieldValue(name, !parentValue ? value : parentValue)
        }}
        max={5}
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
