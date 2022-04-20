import { Sidebar, Header, Loading } from "../"

import { useContext } from "react"
import {
  TournamentProvider,
  TournamentContext,
} from "contexts/TournamentProvider"

export const Layout = ({ children }) => {
  const { isLoadingTournaments } = useContext(TournamentContext)

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        {isLoadingTournaments ? (
          <></>
        ) : (
          // <Loading message="Getting Tournaments" />
          <TournamentProvider>
            <Sidebar />
            <>{children}</>
          </TournamentProvider>
        )}
      </main>
    </div>
  )
}
