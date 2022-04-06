import styles from "./sidebar.module.scss"
import NextImage from "../../atoms/Image"
import { useTournament } from "hooks/useTournament"
import { useEffect } from "react"
const genesisLogo = "/images/genesis-logo.png"
const gbsLogo = "/images/gbs-logo.svg"

export const Sidebar = () => {
  const { allTournaments, handleTournamentChange, activeTournament } =
    useTournament()

  // Set Live tournament as active tournament by default
  useEffect(() => {
    const liveTournament = allTournaments?.find(
      (tournament) => tournament.attributes.Live
    )

    handleTournamentChange(liveTournament?.id)
  }, [allTournaments])

  // Mobile navigation handlers

  const prevTournament = (current) => {
    const currentTournament = allTournaments.find(
      (tournament) => tournament.id === current
    )

    return allTournaments[allTournaments.indexOf(currentTournament) - 1]?.id
  }

  const nextTournament = (current) => {
    const currentTournament = allTournaments.find(
      (tournament) => tournament.id === current
    )

    const next =
      allTournaments[allTournaments.indexOf(currentTournament) + 1]?.id

    return next ? next : null
  }

  const isLive = (current) => {
    const currentTournament = allTournaments.find(
      (tournament) => tournament.id === current
    )
    return allTournaments[allTournaments.indexOf(currentTournament)]?.attributes
      .Live
  }

  const PrevLink = () => (
    <div
      onClick={() => {
        prevTournament(activeTournament) &&
          handleTournamentChange(prevTournament(activeTournament))
      }}
      className={
        prevTournament(activeTournament) ? styles.prev : styles.hidePrev
      }
    />
  )

  const NextLink = ({ hasNext }) => (
    <div
      onClick={() => {
        nextTournament(activeTournament) &&
          handleTournamentChange(nextTournament(activeTournament))
      }}
      className={`${styles.next} ${!hasNext && styles.disable}`}
    />
  )

  const ActiveLink = ({ tournament }) => {
    const { Tour } = tournament.attributes
    return (
      <div
        className={`${styles.current}
                ${!prevTournament(activeTournament) && styles.noPrev}`}
      >
        <div className={styles.current_header}>
          {isLive(activeTournament) && (
            <div className={styles.livePill}>
              <span>Live</span>
            </div>
          )}
          <h2 className={styles.sidebar_tournament_name}>
            {
              allTournaments.find(
                (tournament) => tournament.id === activeTournament
              )?.attributes.Tournament_Name
            }
          </h2>
        </div>
        <div className={styles.current_info}>
          <p className={styles.sidebar_updated}>
            <span className={styles.sidebar_tour_type_mobile}>{Tour}</span>
            Updated 11:10 GMT 14/2/22
          </p>
          <p className={styles.sidebar_date}>Feb 3–6, 2022</p>
          <p className={styles.sidebar_location}>
            Pebble Beach Golf Links and others
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.mobileNav}>
        {/* Handle mobile navigation with less than three links */}
        {allTournaments?.length < 3
          ? allTournaments?.map((tournament, index) => {
              return index === 0 ? (
                <PrevLink key={index} />
              ) : (
                <>
                  <ActiveLink tournament={tournament} />
                  <NextLink hasNext={!!nextTournament(activeTournament)} />
                </>
              )
            })
          : allTournaments?.map((tournament, index) => {
              return index === 0 ? (
                <PrevLink />
              ) : index === allTournaments.length - 1 ? (
                <NextLink />
              ) : (
                <ActiveLink tournament={tournament} />
              )
            })}
      </div>

      <div className={`${styles.sidebar} ${styles.sidebar_2_tabs}`}>
        <aside className={styles.sidebar_inner}>
          {allTournaments?.map((tournament, index) => {
            const {
              Tour,
              Tournament_Name,
              Tournament_Start,
              Tournament_End,
              updatedAt,
              Live,
            } = tournament.attributes
            return (
              <div
                key={index}
                onClick={() => {
                  handleTournamentChange(tournament.id)
                }}
                className={`${styles.sidebar_tab} ${
                  activeTournament === tournament.id ? styles.active : {}
                }`}
              >
                <div>
                  <div className={styles.sidebar_tab_left}>
                    <div className={styles.sidebar_logo}>
                      <NextImage src={genesisLogo} width={51} height={11} />
                    </div>
                    {Live && (
                      <div className={styles.livePill}>
                        <span>Live</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.sidebar_tab_right}>
                    <p className={styles.sidebar_tour_type_desktop}>{Tour}</p>
                    <h2 className={styles.sidebar_tournament_name}>
                      {Tournament_Name}
                    </h2>

                    <div
                      className={
                        activeTournament !== tournament.id && styles.hideInfo
                      }
                    >
                      <p className={styles.sidebar_updated}>
                        <span className={styles.sidebar_tour_type_mobile}>
                          PGA Tour
                        </span>
                        Updated 11:10 GMT 14/2/22
                      </p>
                      <p className={styles.sidebar_date}>Feb 3–6, 2022</p>
                      <p className={styles.sidebar_location}>
                        Pebble Beach Golf Links and others
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className={styles.sidebar_socials}>
            <div className={styles.sidebar_golf_logo}>
              <NextImage src={gbsLogo} width={70} height={55} />
            </div>

            <div className={styles.sidebar_social_links}>
              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                    fill="#1DA1F2"
                  />
                  <path
                    d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M23.6 12.1004C23.4 11.4004 22.9 10.9004 22.2 10.7004C21 10.4004 15.9 10.4004 15.9 10.4004C15.9 10.4004 10.9 10.4004 9.60001 10.7004C8.90001 10.9004 8.4 11.4004 8.2 12.1004C8 13.4004 8 16.0004 8 16.0004C8 16.0004 8 18.6004 8.3 19.9004C8.5 20.6004 9 21.1004 9.7 21.3004C10.9 21.6004 16 21.6004 16 21.6004C16 21.6004 21 21.6004 22.3 21.3004C23 21.1004 23.5 20.6004 23.7 19.9004C24 18.6004 24 16.0004 24 16.0004C24 16.0004 24 13.4004 23.6 12.1004ZM14.4 18.4004V13.6004L18.6 16.0004L14.4 18.4004Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
