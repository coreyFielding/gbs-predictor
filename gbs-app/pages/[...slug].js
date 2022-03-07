import Page from "../components/common/Page"
import displayComponents from "../functions/wordpress/displayComponents"
import pagesComponentList from "../components/blocks/pages"
// import getAllPages from "../lib/wordpress/pages/getAllPages";
// import getPageBySlug from "../lib/wordpress/pages/getPageBySlug";

//* Example component data which would normally be fetched from an API call
import { exampleComponentData } from "../lib/wordpress/pages/exampleComponentData"

// ? Read more on dynamic routes: https://nextjs.org/docs/routing/dynamic-routes

const DynamicPages = ({ page }) => {
  console.log("Page :: ", page)
  return (
    <Page seo={{ title: "Golf Betting Predictor" }}>
      {/* {displayComponents(exampleComponentData, pagesComponentList)} */}
    </Page>
  )
}

export default DynamicPages

// ? Use getStaticProps() with params to fetch page specific data based on the slug being dynamically passed to the page

export async function getStaticProps({ params }) {
  //* Example of how to fetch data
  // const page = await getPageBySlug(params.slug);
  // console.log(page);

  const page = {
    slug: params.slug,
  }

  //* Example of how to pass menu props to the Wordpress Provider in the _app.js
  const menus = {
    primary: [{ label: "About", url: "/about" }],
    secondary: [{ label: "Contact", url: "/contact" }],
  }

  //* Example of how to render 404 on static pages; if 'page' data doesn't exist a 404 page will be displayed
  if (!page) {
    return {
      notFound: true,
    }
  }

  //* This will be passed to the page component as props
  return {
    props: {
      page,
      menus,
    },
  }
}

// ? Use getStaticPaths() to fetch all page slug paths and pass to the getStaticProps() params

export async function getStaticPaths() {
  //* Example of fetching data for all pages to pass to getStaticPaths() paths
  // const pages = await getAllPages();

  // await Promise.all(
  //   pages.map(async (pages) => {
  //     return {
  //       params: { slug: [page.slug] },
  //     };
  //   })
  // );

  //* Get the paths we want to pre-render for pages
  const paths = [
    {
      params: { slug: ["dynamic-slugs-go-here"] },
    },
  ]

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: "blocking",
  }
}
