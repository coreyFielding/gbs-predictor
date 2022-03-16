import styles from "./sidebar.module.scss"
import NextImage from "../../atoms/Image"
const genesisLogo = "/images/genesis-logo.png"
const hondaLogo = "/images/honda-logo.png"
const gbsLogo = "/images/gbs-logo.png"

export const Sidebar = () => {
  return (
      <div className={styles.sidebar}>
      <aside className={styles.sidebar_inner}>
        <div className={styles.sidebar_tab + ' ' + styles.sidebar_tab_live}>
          <div>
          <div className={styles.sidebar_tab_left}>
            <div className={styles.sidebar_logo}>
              <NextImage src={genesisLogo} width={51} height={11} />
            </div>
            <svg width="51" height="20" viewBox="0 0 51 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="51" height="20" rx="10" fill="#3CD176"/>
              <path d="M22.14 7H22.88V13.36H26.8V14H22.14V7ZM27.8787 8.74H28.5887V14H27.8787V8.74ZM28.2387 7.59C28.092 7.59 27.9687 7.54 27.8687 7.44C27.7687 7.34 27.7187 7.22 27.7187 7.08C27.7187 6.94667 27.7687 6.83 27.8687 6.73C27.9687 6.63 28.092 6.58 28.2387 6.58C28.3853 6.58 28.5087 6.63 28.6087 6.73C28.7087 6.82333 28.7587 6.93667 28.7587 7.07C28.7587 7.21667 28.7087 7.34 28.6087 7.44C28.5087 7.54 28.3853 7.59 28.2387 7.59ZM34.9842 8.74L32.6442 14H31.9142L29.5842 8.74H30.3242L32.2942 13.22L34.2842 8.74H34.9842ZM40.4177 11.59H36.0177C36.0577 12.1367 36.2677 12.58 36.6477 12.92C37.0277 13.2533 37.5077 13.42 38.0877 13.42C38.4143 13.42 38.7143 13.3633 38.9877 13.25C39.261 13.13 39.4977 12.9567 39.6977 12.73L40.0977 13.19C39.8643 13.47 39.571 13.6833 39.2177 13.83C38.871 13.9767 38.4877 14.05 38.0677 14.05C37.5277 14.05 37.0477 13.9367 36.6277 13.71C36.2143 13.4767 35.891 13.1567 35.6577 12.75C35.4243 12.3433 35.3077 11.8833 35.3077 11.37C35.3077 10.8567 35.4177 10.3967 35.6377 9.99C35.8643 9.58333 36.171 9.26667 36.5577 9.04C36.951 8.81333 37.391 8.7 37.8777 8.7C38.3643 8.7 38.801 8.81333 39.1877 9.04C39.5743 9.26667 39.8777 9.58333 40.0977 9.99C40.3177 10.39 40.4277 10.85 40.4277 11.37L40.4177 11.59ZM37.8777 9.31C37.371 9.31 36.9443 9.47333 36.5977 9.8C36.2577 10.12 36.0643 10.54 36.0177 11.06H39.7477C39.701 10.54 39.5043 10.12 39.1577 9.8C38.8177 9.47333 38.391 9.31 37.8777 9.31Z" fill="#254933"/>
              <circle cx="9" cy="10" r="5" fill="#FF1A1A"/>
            </svg>
          </div>

          <div className={styles.sidebar_tab_right}>
            <p className={styles.sidebar_tour_type_desktop}>PGA Tour</p>
            <h2 className={styles.sidebar_tournament_name}>Genesis International</h2>
            <p className={styles.sidebar_updated}><span className={styles.sidebar_tour_type_mobile}>PGA Tour</span>Updated 11:10 GMT 14/2/22</p>
            <p className={styles.sidebar_date}>Feb 3–6, 2022</p>
            <p className={styles.sidebar_location}>Pebble Beach Golf Links and others</p>
          </div>
          </div>
        </div>
        <div className={styles.sidebar_tab}>
          <div>
            <div className={styles.sidebar_tab_left}>
              <div className={styles.sidebar_logo}>
                <NextImage src={hondaLogo} width={51} height={46} />
              </div>
            </div>

            <div className={styles.sidebar_tab_right}>
              <p className={styles.sidebar_tour_type_desktop}>PGA Tour</p>
              <h2 className={styles.sidebar_tournament_name}>Honda Classic</h2>
              <p className={styles.sidebar_updated}><span className={styles.sidebar_tour_type_mobile}>PGA Tour</span>Updated 11:10 GMT 14/2/22</p>
              <p className={styles.sidebar_date}>Feb 3–6, 2022</p>
              <p className={styles.sidebar_location}>Pebble Beach Golf Links and others</p>
            </div>
          </div>
        </div>
        <div className={styles.sidebar_tab}>
          <div>
            <div className={styles.sidebar_tab_left}>
              <div className={styles.sidebar_logo}>
                <NextImage src={hondaLogo} width={51} height={46} />
              </div>
            </div>

            <div className={styles.sidebar_tab_right}>
              <p className={styles.sidebar_tour_type_desktop}>PGA Tour</p>
              <h2 className={styles.sidebar_tournament_name}>Corales Puntacana Resort and Club Championship</h2>
              <p className={styles.sidebar_updated}><span className={styles.sidebar_tour_type_mobile}>PGA Tour</span>Updated 11:10 GMT 14/2/22</p>
              <p className={styles.sidebar_date}>Feb 3–6, 2022</p>
              <p className={styles.sidebar_location}>Pebble Beach Golf Links and others</p>
            </div>
          </div>
        </div>

        <svg className="tab-corners" width="69" height="178" viewBox="0 0 69 179" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M119 23C119 10.2975 108.703 0 96 0H92C79.2975 0 69 10.2975 69 23V36C69 48.7025 58.7025 59 46 59H31.5C14.103 59 0 73.103 0 90.5C0 107.897 14.103 122 31.5 122H46C58.7025 122 69 132.297 69 145V156C69 168.703 79.2974 179 92 179H96C108.703 179 119 168.703 119 156V23Z" fill="#BCF3D7"/>
        </svg>

        <div className={styles.sidebar_socials}>
          <NextImage src={gbsLogo} width={70} height={55} />

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
