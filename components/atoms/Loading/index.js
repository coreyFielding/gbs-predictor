import styles from "./loading.module.scss"

export const Loading = ({ message }) => {
  return (
    <div className={styles.container}>
      {message ? (
        message
      ) : (
        <div className={styles.ldsDefault}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  )
}
