import cn from "classnames"
import PropTypes from "prop-types"
import styles from "./header.module.scss"
import Container from "../../atoms/Container"
import Router from "next/router"

export const Header = ({ className }) => {
  const classes = cn(styles.header, className)

  return (
    <header className={classes}>
      <Container className={styles.container}>
        <div className={styles.header_inner}>
          <div className="header__left-side">
            <button onClick={() => Router.push("/golfbettingsystem.co.uk")}>
              <svg
                className="back-button"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="15"
                  cy="15"
                  r="14.5"
                  transform="rotate(-180 15 15)"
                  stroke="#254933"
                />
                <path d="M18 9L12 15L18 21" stroke="#254933" />
              </svg>
            </button>

            <svg
              className="header-logo"
              width="176"
              height="40"
              viewBox="0 0 176 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M175.001 16.2793H174.865C172.792 16.2793 171.346 17.3705 170.691 19.3346H170.637V16.6612H167.336V29.2642H170.664V24.1085C170.664 21.0259 171.946 19.8802 174.62 19.8802H175.001V16.2793Z"
                fill="#254933"
              />
              <path
                d="M157.681 16.2529C153.671 16.2529 150.697 19.0081 150.697 22.9636C150.697 26.9191 153.671 29.6743 157.681 29.6743C161.691 29.6743 164.664 26.9191 164.664 22.9636C164.664 19.0081 161.691 16.2529 157.681 16.2529ZM157.681 19.4173C159.727 19.4173 161.2 20.8086 161.2 22.9636C161.2 25.1187 159.727 26.5099 157.681 26.5099C155.635 26.5099 154.134 25.1187 154.134 22.9636C154.134 20.8086 155.635 19.4173 157.681 19.4173Z"
                fill="#254933"
              />
              <path
                d="M149.682 19.4707V16.6609H147.09V11.6143H143.735V16.6609H141.416V19.4707H143.735V25.554C143.735 28.091 145.153 29.2912 147.527 29.2912H149V26.1814H148.427C147.445 26.1814 147.09 25.7722 147.09 24.7629V19.4707H149.682Z"
                fill="#254933"
              />
              <path
                d="M135.831 29.6743C137.55 29.6743 138.941 29.2379 140.25 28.4195L138.805 25.6643C137.986 26.1826 137.032 26.5372 135.886 26.5372C133.813 26.5372 132.312 25.0914 132.312 22.9636C132.312 20.8359 133.813 19.39 135.886 19.39C137.032 19.39 137.986 19.7447 138.805 20.263L140.25 17.5078C138.941 16.6894 137.55 16.2529 135.831 16.2529C131.767 16.2529 128.875 18.9263 128.875 22.9636C128.875 27.001 131.767 29.6743 135.831 29.6743Z"
                fill="#254933"
              />
              <path
                d="M102.691 29.6736C104.737 29.6736 106.101 28.8007 106.892 27.4913H106.946V29.2645H110.274V10.1689H106.946V18.4346H106.892C106.101 17.1252 104.737 16.2522 102.691 16.2522C99.39 16.2522 96.6348 18.6528 96.6348 22.9629C96.6348 27.2731 99.39 29.6736 102.691 29.6736ZM103.536 26.5092C101.518 26.5092 100.127 25.0907 100.127 22.9629C100.127 20.8352 101.518 19.4166 103.536 19.4166C105.555 19.4166 106.946 20.8352 106.946 22.9629C106.946 25.0907 105.555 26.5092 103.536 26.5092Z"
                fill="#254933"
              />
              <path
                d="M88.799 16.2529C84.8435 16.2529 82.252 18.9809 82.252 22.9909C82.252 27.001 84.9253 29.6743 89.0445 29.6743C91.6906 29.6743 93.3819 28.4468 94.5004 27.4102L92.809 24.9823C92.0998 25.6916 90.8449 26.7009 89.0445 26.7009C87.1077 26.7009 85.6891 25.5825 85.4982 23.6456H94.9096V22.9909C94.9096 18.6808 92.6181 16.2529 88.799 16.2529ZM88.6353 18.9536C90.2721 18.9536 91.4178 19.8811 91.5269 21.4906H85.58C85.8528 19.7447 87.0258 18.9536 88.6353 18.9536Z"
                fill="#254933"
              />
              <path
                d="M81.2573 16.2793H81.1209C79.0477 16.2793 77.6019 17.3705 76.9472 19.3346H76.8926V16.6612H73.5918V29.2642H76.9199V24.1085C76.9199 21.0259 78.202 19.8802 80.8754 19.8802H81.2573V16.2793Z"
                fill="#254933"
              />
              <path
                d="M65.1991 10.1689H58.543V29.2645H62.0347V22.1991H65.1991C69.482 22.1991 71.637 19.6076 71.637 16.1158C71.637 12.7332 69.482 10.1689 65.1991 10.1689ZM64.8172 18.9802H62.0347V13.3879H64.8172C66.6995 13.3879 67.8998 14.2881 67.8998 16.1431C67.8998 18.0254 66.6995 18.9802 64.8172 18.9802Z"
                fill="#254933"
              />
              <path
                d="M44.7373 9.75977C41.0819 9.75977 39.0632 11.642 39.0632 14.6155C39.0632 16.6614 40.0725 18.2436 42.0912 19.6349L45.1737 21.8445C46.4013 22.7174 47.1106 23.3721 47.1106 24.3542C47.1106 25.4999 46.2104 26.291 44.4099 26.291C42.5822 26.291 40.7818 25.5272 39.2541 24.627L37.6992 27.8187C39.4997 28.9371 41.8184 29.6737 44.3008 29.6737C48.3109 29.6737 50.8206 27.7641 50.8206 24.1632C50.8206 21.7627 49.6748 20.235 47.547 18.7892L44.2463 16.4705C43.2096 15.7339 42.7732 15.2429 42.7732 14.5064C42.7732 13.6607 43.3188 13.1151 44.7646 13.1151C46.0194 13.1151 47.3834 13.5516 48.8292 14.2881L50.3295 11.0965C48.5564 10.2781 46.6468 9.75977 44.7373 9.75977Z"
                fill="#254933"
              />
              <path
                d="M32.704 19.1438V19.0893C34.6136 18.4891 35.6229 17.0161 35.6229 14.9701C35.6229 11.8057 33.2496 10.1689 29.8943 10.1689H22.3379V29.2645H30.4126C33.7134 29.2645 36.5777 27.6004 36.5777 23.8632C36.5777 20.9716 34.9682 19.4985 32.704 19.1438ZM29.3487 13.3879C30.9036 13.3879 31.9675 14.1517 31.9675 15.6521C31.9675 17.1252 30.9854 17.9708 29.2123 17.9708H25.8296V13.3879H29.3487ZM29.8124 26.0455H25.8296V20.9716H29.676C31.7765 20.9716 32.8677 21.9263 32.8677 23.5085C32.8677 25.0907 31.722 26.0455 29.8124 26.0455Z"
                fill="#254933"
              />
              <path
                d="M19.5593 18.4619H10.3661V21.6808H15.8493C15.631 23.754 13.9397 26.1001 10.257 26.1001C6.30152 26.1001 3.8191 23.4267 3.8191 19.7167C3.8191 16.0886 6.21968 13.3334 10.1206 13.3334C12.2757 13.3334 14.0216 14.1517 15.3582 15.2702L17.677 12.2967C15.8493 10.8237 13.4214 9.75977 10.257 9.75977C4.01006 9.75977 0 13.8244 0 19.7167C0 25.8273 4.25557 29.6737 10.0933 29.6737C16.5313 29.6737 19.5865 24.9816 19.5865 19.553C19.5865 19.1984 19.5865 18.8438 19.5593 18.4619Z"
                fill="#254933"
              />
              <line
                x1="107.838"
                y1="34.2148"
                x2="132.621"
                y2="34.2148"
                stroke="#1B3F29"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="111.805"
                y1="38.1826"
                x2="128.652"
                y2="38.1826"
                stroke="#1B3F29"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M119.981 31.2471L114.277 17.8555H116.013C116.013 17.8555 118.358 18.5994 119.981 18.5994C121.605 18.5994 123.949 17.8555 123.949 17.8555H125.933L119.981 31.2471Z"
                stroke="#1B3F29"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <circle
                cx="119.981"
                cy="7.6878"
                r="6.6878"
                stroke="#1B3F29"
                stroke-width="2"
              />
              <path
                d="M122.305 2.84816C121.813 2.59753 121.211 2.79331 120.96 3.28546C120.71 3.7776 120.906 4.37973 121.398 4.63036L122.305 2.84816ZM123.345 7.89483C123.345 8.44711 123.793 8.89483 124.345 8.89483C124.897 8.89483 125.345 8.44711 125.345 7.89483H123.345ZM121.398 4.63036C122.083 4.9794 123.345 6.16732 123.345 7.89483H125.345C125.345 5.18972 123.433 3.42258 122.305 2.84816L121.398 4.63036Z"
                fill="#1B3F29"
              />
              <circle cx="124.135" cy="9.76494" r="0.623335" fill="#3CD176" />
              <circle cx="54.7596" cy="19.3435" r="0.991975" fill="#254933" />
            </svg>
          </div>

          <div className={styles.header_span}>
            <span className="span--heading">
              Brought to you by{" "}
              <button
                onClick={() => Router.push("/golfbettingsystem.co.uk")}
                className={styles.header_link}
              >
                golfbettingsystem.co.uk
              </button>
            </span>
          </div>
        </div>
        {/* <Navigation className={styles.navigation} links={menus?.primary} /> */}
      </Container>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}
