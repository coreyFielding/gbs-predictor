import { Page, Heading } from "../components"

const Page404 = () => {
  return (
    <Page seo={{ title: "Page Not Found" }}>
      <Heading tag="h1">404 - Page Not Found</Heading>
    </Page>
  )
}

export default Page404
