import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { Row } from "./Row";
import { News } from "./News";

const Section = styled.section`
  padding: calc(60px + (100 - 60) * ((100vw - 992px) / (1599 - 992))) 0;

  ${mq.mdUp`
    padding: 100px 0;
  `}

  ${(props) =>
    props.bg === "Yes" &&
    `
    background-color: ${props.theme.colors.gray100};
  `}
`;

const SectionTitle = styled.div`
  text-align: center;
  margin: 0 0 calc(35px + (50 - 35) * ((100vw - 992px) / (1599 - 992)));

  ${mq.mdUp`
    margin: 0 0 50px;
  `}

  h2 {
    font-size: calc(35px + (45 - 35) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    color: ${(props) => props.theme.colors.blue};
    margin: 0;

    ${mq.xlUp`
      font-size: 45px;
    `}
  }

  p {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    max-width: 1230px;
    margin: 0 auto;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  a {
    margin-top: 40px;
  }
`;

export const SectionNews = ({ bg, title, desc, list, allList }) => {
  return (
    <Section bg={bg}>
      <Wrapper>
        {(title || desc) && (
          <SectionTitle>
            {title && <h2>{title}</h2>}
            {desc && <p>{desc}</p>}
          </SectionTitle>
        )}
        <Row>
          {list?.map((allItem) =>
            allList?.map(
              (itemList) =>
                allItem.sys.id === itemList.sys.id && (
                  <News
                    key={itemList.sys.id}
                    url={itemList?.fields?.slug}
                    title={itemList?.fields?.title}
                    img={itemList?.fields?.image?.fields.file.url}
                    imgWidth={
                      itemList?.fields?.image?.fields.file.details.image.width
                    }
                    imgHeight={
                      itemList?.fields?.image?.fields.file.details.image.height
                    }
                    txt={itemList?.fields?.shortDescription}
                    view={itemList?.fields?.view}
                  />
                )
            )
          )}
        </Row>
      </Wrapper>
    </Section>
  );
};
