// ReactSlider
import { useEffect, useState } from "react"
import ReactSlider from "react-slider"
import { useTournament } from "../../../../hooks/useTournament"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = ({ item, children, ...props }) => {
  const [value, setValue] = useState(0)

  const { handleVariableChange } = useTournament()

  const variableValue = () => {
    if (item.parentValue && !item.childValue) return item.parentValue

    if (
      (!item.parentValue && item.childValue) ||
      (item.parentValue > 0 && item.childValue)
    ) {
      return item.childValue
    }
  }

  return (
    <div className={styles.container}>
      <ReactSlider
        className={styles.horizontalSlider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        value={variableValue()}
        onAfterChange={() => {
          handleVariableChange(item, value)
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
