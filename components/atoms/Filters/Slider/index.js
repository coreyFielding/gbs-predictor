// ReactSlider
import { useEffect, useState } from "react"
import ReactSlider from "react-slider"
import { useTournament } from "../../../../hooks/useTournament"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = ({ item, children, parentValue, ...props }) => {
  const [value, setValue] = useState(0)

  const { handleVariableChange } = useTournament()

  return (
    <div
      className={!parentValue ? styles.container : styles.container_disabled}
    >
      <ReactSlider
        className={styles.horizontalSlider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        value={!parentValue || parentValue === 0 ? item.value : parentValue}
        onAfterChange={() => {
          !parentValue && handleVariableChange(item, value)
        }}
        max={item.groupRange || item.range}
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
