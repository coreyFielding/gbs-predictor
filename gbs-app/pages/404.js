import Page from "../components/common/Page";
import Heading from "../components/atoms/Heading";

const Page404 = () => {
  return (
    <Page seo={{ title: "Page Not Found" }}>
      <Heading tag="h1">404 - Page Not Found</Heading>
    </Page>
  );
};

export default Page404;
