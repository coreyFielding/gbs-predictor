// ReactSlider
import { useState } from "react"
import ReactSlider from "react-slider"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = ({ children, ...props }) => {
  return (
    <div className={styles.container}>
      <ReactSlider
        className={styles.horizontalSlider}
        thumbClassName={styles.thumb}
        trackClassName={styles.track}
        max={5}
        renderThumb={(props, state) => {
          return (
            <>
              <span className={`${styles.value} span--accordionHeading`}>
                {state.valueNow}
              </span>
              <div {...props}></div>
            </>
          )
        }}
      />
    </div>
  )
}
