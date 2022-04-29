import { useEffect, useState } from "react"

import styles from "./sidebar.module.scss"
import Image from "next/image"
import { useTournament } from "hooks/useTournament"
import Link from "next/link"
import Router from "next/router"
import moment from "moment"

const gbsLogo = "/images/gbs-logo.svg"

const twitterIcon = "/images/icons/twitter.svg"
const youtubeIcon = "/images/icons/youtube.svg"
const facebookIcon = "/images/icons/facebook.svg"

export const Sidebar = () => {
  const [liveTournaments, setLiveTournaments] = useState()

  const { allTournaments, handleTournamentChange, activeTournament } =
    useTournament()

  // Only display tournaments that are live and contain bat least one variable and a player list
  const displayLiveTournaments = () => {
    const isLive = allTournaments?.filter(
      ({ attributes }) =>
        attributes.Live &&
        attributes.Imported_Variables.length > 0 &&
        attributes.Player_List.data.length > 0
    )

    setLiveTournaments(isLive)
  }

  // Set first Live tournament as active tournament by default
  useEffect(() => {
    const liveTournament = allTournaments?.find(
      (tournament) => tournament.attributes.Live
    )

    if (liveTournament) {
      const { pathname } = Router

      if (pathname === "/") {
        Router.push({
          pathname: `tournament/${liveTournament.attributes.Tournament_Name.toLowerCase()
            .split(" ")
            .join("-")}`,
        })
      } else {
        Router.push({
          pathname: liveTournament.attributes.Tournament_Name.toLowerCase()
            .split(" ")
            .join("-"),
        })
      }

      handleTournamentChange(liveTournament?.id)
    }
  }, [allTournaments])

  useEffect(() => {
    displayLiveTournaments()
  }, [allTournaments])

  // Mobile navigation handlers
  const prevTournament = (current) => {
    const currentTournament = liveTournaments.find(
      (tournament) => tournament.id === current
    )

    return liveTournaments[liveTournaments.indexOf(currentTournament) - 1]?.id
  }

  const nextTournament = (current) => {
    const currentTournament = liveTournaments.find(
      (tournament) => tournament.id === current
    )

    const next =
      liveTournaments[liveTournaments.indexOf(currentTournament) + 1]?.id

    return next ? next : null
  }

  // const isLive = (current) => {
  //   const currentTournament = allTournaments.find(
  //     (tournament) => tournament.id === current
  //   )
  //   return allTournaments[allTournaments.indexOf(currentTournament)]?.attributes
  //     .Live
  // }

  const MobilePrevLink = ({ tournament, hasPrev }) => (
    <Link
      href={`/tournament/${tournament?.attributes.Tournament_Name.toLowerCase()
        .split(" ")
        .join("-")}`}
    >
      <a
        onClick={() => {
          prevTournament(activeTournament) &&
            handleTournamentChange(prevTournament(activeTournament))
        }}
        className={`${styles.prev} ${!hasPrev && styles.disable}`}
      />
    </Link>
  )

  const MobileNextLink = ({ tournament, hasNext }) => (
    <Link
      href={`/tournament/${tournament?.attributes.Tournament_Name.toLowerCase()
        .split(" ")
        .join("-")}`}
    >
      <a
        onClick={() => {
          nextTournament(activeTournament) &&
            handleTournamentChange(nextTournament(activeTournament))
        }}
        className={`${styles.next} ${!hasNext && styles.disable}`}
      />
    </Link>
  )

  const MobileActiveLink = () => {
    const {
      Tournament_Name,
      Tournament_Info,
      Tournament_Start,
      Tournament_End,
      updatedAt,
      Tour,
    } = liveTournaments?.find(
      (tournament) => tournament.id === activeTournament
    )?.attributes

    return (
      <div className={styles.current}>
        <div className={styles.current_header}>
          {/* {isLive(activeTournament) && (
            <div className={styles.livePill}>
              <span>Live</span>
            </div>
          )} */}
          <h2 className={styles.sidebar_tournament_name}>{Tournament_Name}</h2>
        </div>
        <div className={styles.current_info}>
          <p className={styles.sidebar_updated}>
            <span className={styles.sidebar_tour_type_mobile}>{Tour}</span>
            {`Updated ${moment(updatedAt).format("h:mm a, DD/MM/YY")}`}
          </p>
          <p className={styles.sidebar_date}>{`${moment(
            Tournament_Start
          ).format("MMM Do")}-${moment(Tournament_End).format(
            "MMM Do"
          )}, ${moment(Tournament_End).format("YYYY")}`}</p>
          <p className={styles.sidebar_location}>{Tournament_Info}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.mobileNav}>
        {/* Handle mobile navigation with less than three links */}
        {liveTournaments?.length < 3
          ? liveTournaments?.map((tournament, index) => {
              return index === 0 ? (
                <MobilePrevLink
                  key={index}
                  tournament={liveTournaments[index]}
                  hasPrev={!!prevTournament(activeTournament)}
                />
              ) : (
                <>
                  <MobileActiveLink tournament={tournament} />
                  <MobileNextLink
                    tournament={liveTournaments[index]}
                    hasNext={!!nextTournament(activeTournament)}
                  />
                </>
              )
            })
          : liveTournaments?.map((tournament, index) => {
              return index === 0 ? (
                <MobilePrevLink
                  tournament={liveTournaments[index]}
                  hasPrev={!!prevTournament(activeTournament)}
                />
              ) : index === liveTournaments.length - 1 ? (
                <MobileNextLink
                  tournament={liveTournaments[index]}
                  hasNext={!!nextTournament(activeTournament)}
                />
              ) : (
                <MobileActiveLink tournament={tournament} />
              )
            })}
      </div>

      <div
        className={`${styles.sidebar} ${
          liveTournaments?.length === 1
            ? styles.sidebar_1_tab
            : liveTournaments?.length === 2
            ? styles.sidebar_2_tabs
            : ""
        }`}
      >
        <aside className={styles.sidebar_inner}>
          {liveTournaments?.slice(0, 3).map((tournament, index) => {
            const {
              Tour,
              Tournament_Name,
              Tournament_Icon,
              Tournament_Start,
              Tournament_End,
              Tournament_Info,
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
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAINS}/uploads/${Tournament_Icon?.data?.attributes?.hash}${Tournament_Icon?.data?.attributes?.ext}`}
                        alt="Tournament Image"
                        width={50}
                        height={50}
                        objectFit="contain"
                      />
                    </div>
                    {/* {Live && (
                        <div className={styles.livePill}>
                          <span>Live</span>
                        </div>
                      )} */}
                  </div>

                  <Link
                    key={index}
                    href={`/tournament/${Tournament_Name.toLowerCase()
                      .split(" ")
                      .join("-")}`}
                    onClick={() => {
                      handleTournamentChange(tournament.id)
                    }}
                  >
                    <a className={styles.sidebar_tab_right}>
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
                          {`Updated ${moment(updatedAt).format(
                            "h:mm a, DD/MM/YY"
                          )}`}
                        </p>
                        <p className={styles.sidebar_date}>
                          {`${moment(Tournament_Start).format(
                            "MMM Do"
                          )}-${moment(Tournament_End).format(
                            "MMM Do"
                          )}, ${moment(Tournament_End).format("YYYY")}`}
                        </p>
                        <p className={styles.sidebar_location}>
                          {Tournament_Info}
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
          <div className={styles.sidebar_socials}>
            <div className={styles.sidebar_golf_logo}>
              <a href="golfbettingsystem.co.uk">
                <Image src={gbsLogo} alt="logo" width={70} height={55} />
              </a>
            </div>

            <div className={styles.sidebar_social_links}>
              <a href="#">
                <Image src={twitterIcon} alt="twitter" width={32} height={32} />
              </a>

              <a href="#">
                <Image src={youtubeIcon} alt="youtube" width={32} height={32} />
              </a>

              <a href="#">
                <Image
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
