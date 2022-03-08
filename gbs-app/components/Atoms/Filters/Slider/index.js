// ReactSlider
import ReactSlider from "react-slider"

// Styles
import styles from "./slider.module.scss"

export const SliderFilter = () => {
  return (
    <ReactSlider
      className={styles.horizontalSlider}
      thumbClassName={styles.exampleThumb}
      trackClassName={styles.exampleTrack}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  )
}
