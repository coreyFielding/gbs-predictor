import React, { useState } from "react"
import PropTypes from "prop-types"
import { DefaultSeo } from "next-seo"
import WordPressProvider from "../components/common/WordpressProvider"
import { TournamentProvider } from "contexts/TournamentProvider"
import { QueryClient, QueryClientProvider } from "react-query"
import "../styles/app.scss"

const WebApp = ({ Component, pageProps }) => {
  // Initialize state for WordPress context provider.
  const { menus } = pageProps

  const [wp] = useState({
    menus: menus,
  })

  const defaultSeoData = {
    title: undefined,
    titleTemplate: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        refetchInterval: 100000,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <WordPressProvider value={wp}>
        {!!defaultSeoData && <DefaultSeo {...defaultSeoData} />}
        {/*!!preview && (
          // TODO -- abstract this to a component.
          <p>
            This page is a preview.{" "}
            <Link href="/api/exit-preview">
              <a>Exit preview mode</a>
            </Link>
          </p>
        )} */}
        <TournamentProvider>
          <Component {...pageProps} />
        </TournamentProvider>
      </WordPressProvider>
    </QueryClientProvider>
  )
}

export default WebApp

WebApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
}
