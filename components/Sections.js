import { Fragment } from "react";
import Link from "next/link";
import { Slider } from "./Slider";
import { Services } from "./Services";
import { Tabs } from "./Tabs";
import { Apps } from "./Apps";
import { Testimonial } from "./Testimonial";
import { FeaturedTxt } from "./FeaturedTxt";
import { Section } from "./Section";
import { PersonalItems } from "./PersonalItems";
import { ImageText } from "./ImageText";
import { ImageTextBg } from "./ImageTextBg";
import { Hero } from "./Hero";
import { DefaultSection } from "./DefaultSection";
import { IconChevron } from "../src/svg/IconChevron";
import { ContactInfo } from "./ContactInfo";
import { TextContent } from "./TextContent";
import { SectionNews } from "./SectionNews";

export const Sections = ({
  sections,
  slidesList,
  servicesList,
  tabsList,
  appsList,
  personalList,
  newsList,
  form,
}) => {
  return sections?.fields?.pageElements?.map((section, index) => (
    <Fragment key={section.sys.id}>
      {section?.sys?.contentType?.sys.id === "slider" && (
        <Slider
          slides={section?.fields?.slides}
          allSlides={slidesList}
          small={section?.fields?.size}
          color={section?.fields?.textColor}
        />
      )}
      {section?.sys?.contentType?.sys.id === "appDownload" && (
        <Apps list={appsList} />
      )}
      {section?.sys?.contentType?.sys.id === "services" && (
        <Services list={section?.fields?.service} allList={servicesList} />
      )}
      {section?.sys?.contentType?.sys.id === "testimonial" && (
        <Testimonial
          author={section?.fields?.author}
          desc={section?.fields?.description}
        />
      )}
      {section?.sys?.contentType?.sys.id === "featuredText" && (
        <FeaturedTxt
          center={section?.fields?.textAlign}
          bg={section?.fields?.backgroundImage?.fields.file.url}
          subtitle={section?.fields?.subtitle}
          title={section?.fields?.title}
          txt={section?.fields?.description}
          link={section?.fields?.link}
          linkLabel={section?.fields?.linkLabel}
        />
      )}
      {section?.sys?.contentType?.sys.id === "tabs" && (
        <Tabs
          partners={section?.fields?.grayBackground}
          list={section?.fields?.tabs}
          allList={tabsList}
          position={section?.fields?.tabsAlign}
        />
      )}
      {section?.sys?.contentType?.sys.id === "sectionTitleButton" && (
        <Section
          title={section?.fields?.title}
          noMb={section?.fields?.disableMarginTop}
        >
          {section?.fields?.description && (
            <p>{section?.fields?.description}</p>
          )}
          {section?.fields?.linkUrl && (
            <Link href={section?.fields?.linkUrl}>
              <a className="btn btn--blue">
                {section?.fields?.linkLabel}
                <IconChevron />
              </a>
            </Link>
          )}
        </Section>
      )}
      {section?.sys?.contentType?.sys.id === "imageTextBg" && (
        <ImageTextBg
          title={section?.fields?.title}
          txt={section?.fields?.description}
          img={section?.fields?.image?.fields.file.url}
          imgWidth={section?.fields?.image?.fields.file.details.image.width}
          imgHeight={section?.fields?.image?.fields.file.details.image.height}
          link={section?.fields?.link}
          linkLabel={section?.fields?.linkLabel}
          gray={section?.fields?.showGrayBackground}
        />
      )}
      {section?.sys?.contentType?.sys.id === "personalItems" && (
        <PersonalItems
          title={section?.fields?.title}
          list={section?.fields?.personalItem}
          allList={personalList}
        />
      )}
      {section?.sys?.contentType?.sys.id === "hero" && (
        <Hero
          id={index}
          bg={section?.fields?.backgroundImage?.fields.file.url}
          color={section?.fields?.backgroundColor}
          title={section?.fields?.title}
          txt={section?.fields?.description}
          position={section?.fields?.textPosition}
          bolder={section?.fields?.titleBolder}
          opacity={section?.fields?.backgroundColorOpacity}
          subtitle={section?.fields?.subtitle}
          linkLabel={section?.fields?.linkLabel}
          form={form}
        />
      )}
      {section?.sys?.contentType?.sys.id === "imageText" && (
        <ImageText
          title={section?.fields?.title}
          txt={section?.fields?.description}
          img={section?.fields?.image?.fields.file.url}
          imgWidth={section?.fields?.image?.fields.file.details.image.width}
          imgHeight={section?.fields?.image?.fields.file.details.image.height}
          marginTop={section?.fields?.marginTop}
        />
      )}
      {section?.sys?.contentType?.sys.id === "defaultSection" && (
        <DefaultSection
          title={section?.fields?.title}
          txt={section?.fields?.description}
          img={section?.fields?.image?.fields.file.url}
          imgWidth={section?.fields?.image?.fields.file.details.image.width}
          imgHeight={section?.fields?.image?.fields.file.details.image.height}
          link={section?.fields?.linkUrl}
          linkLabel={section?.fields?.linkLabel}
        />
      )}
      {section?.sys?.contentType?.sys.id === "contactPage" && (
        <ContactInfo
          address={section?.fields?.address}
          email={section?.fields?.email}
          getInTouch={section?.fields?.getInTouch}
          howCanWeHelp={section?.fields?.howWeCanHelp}
          phone={section?.fields?.phone}
          img={section?.fields?.image?.fields.file.url}
          imgWidth={section?.fields?.image?.fields.file.details.image.width}
          imgHeight={section?.fields?.image?.fields.file.details.image.height}
          form={form}
          mapCode={section?.fields?.mapCode}
        />
      )}
      {section?.sys?.contentType?.sys.id === "textContent" && (
        <TextContent
          title={section?.fields?.title}
          txt={section?.fields?.content}
          img={section?.fields?.hero?.fields.file.url}
        />
      )}
      {section?.sys?.contentType?.sys.id === "newsList" && (
        <SectionNews
          list={section?.fields?.news}
          allList={newsList}
          bg={section?.fields?.grayBackground}
          title={section?.fields?.title}
          desc={section?.fields?.description}
        />
      )}
    </Fragment>
  ));
};
