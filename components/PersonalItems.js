import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { Row } from "./Row";
import { Col } from "./Col";
import { IconChevron } from "../src/svg/IconChevron";

const Section = styled.section`
  padding: calc(60px + (100 - 60) * ((100vw - 320px) / (991 - 320))) 0;

  ${mq.mdUp`
    padding: 100px 0;
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

const Apps = styled.div`
  text-align: center;
  max-width: 1220px;
  margin: 0 auto -40px;
  padding-top: 60px;

  .btn {
    margin-bottom: 40px;
    min-width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    white-space: normal;

    br {
      display: none;
    }

    ${mq.btwSmMd`
      white-space: pre-line;

      br {
        display: block;
      }
    `}

    ${mq.btwMdLg`
      white-space: pre-line;

      br {
        display: block;
      }
    `}
  }
`;

const ImgBox = styled.div`
  height: 210px;
`;

export const PersonalItems = ({ title, list, allList }) => {
  return (
    <Section>
      <Wrapper>
        {title && (
          <SectionTitle>
            <p>{title}</p>
          </SectionTitle>
        )}
        <Apps>
          <Row>
            {list.map((item) =>
              allList.map(
                (itemAll) =>
                  item.sys.id === itemAll.sys.id && (
                    <Col
                      key={itemAll.sys.id}
                      width={{ _: 1, sm: "calc(100% / 3)" }}
                    >
                      <ImgBox>
                        <Image
                          src={`https:${itemAll?.fields?.image?.fields.file.url}`}
                          layout="fixed"
                          width={
                            itemAll?.fields?.image?.fields.file.details.image
                              .width
                          }
                          height={
                            itemAll?.fields?.image?.fields.file.details.image
                              .height
                          }
                          alt={itemAll?.fields?.image?.fields.description}
                        />
                      </ImgBox>
                      <Link href={itemAll?.fields?.link}>
                        <a className="btn btn--blue">
                          {itemAll?.fields?.title.replace("\n", "")}
                          <IconChevron />
                        </a>
                      </Link>
                    </Col>
                  )
              )
            )}
          </Row>
        </Apps>
      </Wrapper>
    </Section>
  );
};
