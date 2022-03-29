import { Layout } from "../components/Layout";
import { Sections } from "../components/Sections";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Investors({
  contentfulPage,
  slidesList,
  appsList,
  servicesList,
  tabsList,
  personalList,
  newsList,
}) {
  const pageContent = contentfulPage[0];

  return (
    <Layout
      title={pageContent?.fields?.seoTitle}
      desc={pageContent?.fields?.seoDescription}
      keys={pageContent?.fields?.seoKeywords}
    >
      <Sections
        sections={pageContent}
        slidesList={slidesList}
        servicesList={servicesList}
        appsList={appsList}
        tabsList={tabsList}
        personalList={personalList}
        newsList={newsList}
      />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const contentfulPage = await client
    .getEntries({
      content_type: "pages",
      "fields.pageTitle": "Investors",
      locale: locale,
    })
    .then((response) => response.items);
  const slidesList = await client
    .getEntries({
      content_type: "slides",
      locale: locale,
    })
    .then((response) => response.items);
  const appsList = await client
    .getEntries({
      content_type: "appDownload",
      locale: locale,
    })
    .then((response) => response.items);
  const servicesList = await client
    .getEntries({
      content_type: "service",
      locale: locale,
    })
    .then((response) => response.items);
  const tabsList = await client
    .getEntries({
      content_type: "tab",
      locale: locale,
    })
    .then((response) => response.items);
  const personalList = await client
    .getEntries({
      content_type: "personalItem",
      locale: locale,
    })
    .then((response) => response.items);
  const newsList = await client
    .getEntries({
      content_type: "news",
      locale: locale,
    })
    .then((response) => response.items);

  return {
    props: {
      contentfulPage,
      slidesList,
      appsList,
      servicesList,
      tabsList,
      personalList,
      newsList,
    },
  };
}
