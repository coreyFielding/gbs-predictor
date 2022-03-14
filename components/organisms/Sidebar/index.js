import styles from "./sidebar.module.scss"

export const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
      <aside className={styles.sidebar_inner}>
        <div className={styles.sidebar_tab}>
          <div>
            <h2>Genesis International</h2>
            <p>PGA Tour</p>
          </div>
        </div>
        <div className={styles.sidebar_tab}>
          <div>
            <h2>Honda Classic</h2>
          </div>
        </div>
        <div className={styles.sidebar_tab}>
          <div>
            <h2>Honda Classic</h2>
          </div>
        </div>

        <svg className="tab-corners" width="69" height="178" viewBox="0 0 69 179" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M119 23C119 10.2975 108.703 0 96 0H92C79.2975 0 69 10.2975 69 23V36C69 48.7025 58.7025 59 46 59H31.5C14.103 59 0 73.103 0 90.5C0 107.897 14.103 122 31.5 122H46C58.7025 122 69 132.297 69 145V156C69 168.703 79.2974 179 92 179H96C108.703 179 119 168.703 119 156V23Z" fill="#BCF3D7"/>
        </svg>

        <div className={styles.sidebar_socials}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#1DA1F2"/>
            <path d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z" fill="white"/>
          </svg>

          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#FF0000"/>
            <path d="M23.6 12.1004C23.4 11.4004 22.9 10.9004 22.2 10.7004C21 10.4004 15.9 10.4004 15.9 10.4004C15.9 10.4004 10.9 10.4004 9.60001 10.7004C8.90001 10.9004 8.4 11.4004 8.2 12.1004C8 13.4004 8 16.0004 8 16.0004C8 16.0004 8 18.6004 8.3 19.9004C8.5 20.6004 9 21.1004 9.7 21.3004C10.9 21.6004 16 21.6004 16 21.6004C16 21.6004 21 21.6004 22.3 21.3004C23 21.1004 23.5 20.6004 23.7 19.9004C24 18.6004 24 16.0004 24 16.0004C24 16.0004 24 13.4004 23.6 12.1004ZM14.4 18.4004V13.6004L18.6 16.0004L14.4 18.4004Z" fill="white"/>
          </svg>

          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#1877F2"/>
            <path d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z" fill="white"/>
          </svg>

        </div>
      </aside>
    </div>
  )
}
