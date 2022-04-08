import styles from "./sidebar.module.scss"
import NextImage from "../../atoms/Image"
import { useTournament } from "hooks/useTournament"
import { useEffect } from "react"

const genesisLogo = "/images/genesis-logo.png"
const gbsLogo = "/images/gbs-logo.svg"
const twitterIcon = "/images/icons/twitter.svg"
const youtubeIcon = "/images/icons/youtube.svg"
const facebookIcon = "/images/icons/facebook.svg"

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

  const MobilePrevLink = ({ hasPrev }) => (
    <div
      onClick={() => {
        prevTournament(activeTournament) &&
          handleTournamentChange(prevTournament(activeTournament))
      }}
      className={`${styles.prev} ${!hasPrev && styles.disable}`}
    />
  )

  const MobileNextLink = ({ hasNext }) => (
    <div
      onClick={() => {
        nextTournament(activeTournament) &&
          handleTournamentChange(nextTournament(activeTournament))
      }}
      className={`${styles.next} ${!hasNext && styles.disable}`}
    />
  )

  const MobileActiveLink = ({ tournament }) => {
    const { Tour } = tournament.attributes
    return (
      <div className={styles.current}>
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
                <MobilePrevLink
                  key={index}
                  hasPrev={!!prevTournament(activeTournament)}
                />
              ) : (
                <>
                  <MobileActiveLink tournament={tournament} />
                  <MobileNextLink
                    hasNext={!!nextTournament(activeTournament)}
                  />
                </>
              )
            })
          : allTournaments?.map((tournament, index) => {
              return index === 0 ? (
                <MobilePrevLink hasPrev={!!prevTournament(activeTournament)} />
              ) : index === allTournaments.length - 1 ? (
                <MobileNextLink hasNext={!!nextTournament(activeTournament)} />
              ) : (
                <MobileActiveLink tournament={tournament} />
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
                <NextImage
                  src={twitterIcon}
                  alt="twitter"
                  width={32}
                  height={32}
                />
              </a>

              <a href="#">
                <NextImage
                  src={youtubeIcon}
                  alt="youtube"
                  width={32}
                  height={32}
                />
              </a>

              <a href="#">
                <NextImage
                  src={facebookIcon}
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
