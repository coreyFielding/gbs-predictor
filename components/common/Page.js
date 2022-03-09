import { BlogJsonLd, NextSeo } from "next-seo"
import { Layout } from ".."

export const Page = ({ children, seo, hasJsonLd }) => {
  return (
    <>
      <NextSeo
        title={seo?.title}
        description={seo?.description}
        canonical={seo?.canonical}
        openGraph={{
          title: seo?.title,
          description: seo?.description,
          images: [{ url: seo?.opengraphImage?.sourceUrl }],
          url: seo?.canonical,
        }}
        nofollow={"follow" !== seo?.robots?.follow}
        noindex={"index" !== seo?.robots?.index}
      />
      {!!hasJsonLd && (
        <BlogJsonLd
          url={seo?.canonical}
          title={seo?.title}
          images={[seo?.opengraphImage?.sourceUrl]}
          datePublished={seo?.opengraphPublishedTime}
          dateModified={seo?.opengraphModifiedTime}
          authorName={seo?.opengraphAuthor}
          description={seo?.description}
        />
      )}
      <Layout>{children}</Layout>
    </>
  )
}
