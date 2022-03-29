import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Article } from "./Article";
import { Row } from "./Row";
import { Col } from "./Col";
import { Wrapper } from "./Wrap";

const ImgBox = styled.div``;

const Section = styled.section`
  padding: calc(60px + (100 - 60) * ((100vw - 992px) / (1599 - 992))) 0;

  ${mq.mdUp`
    padding: 100px 0;
  `}

  ${(props) =>
    props.marginTop &&
    `@media (min-width: 1280px) {${ImgBox} {margin-top: -400px !important;}}`}
`;

export const ImageText = ({
  title,
  txt,
  link,
  linkLabel,
  img,
  imgWidth,
  imgHeight,
  marginTop,
}) => {
  return (
    <Section marginTop={marginTop}>
      <Wrapper>
        <Row>
          <Col width={{ _: 1, sm: "58.333333%" }}>
            <Article>
              {title && <h2>{title}</h2>}
              {txt}
              {link && (
                <Link href={link}>
                  <a>{linkLabel}</a>
                </Link>
              )}
            </Article>
          </Col>
          <Col width={{ _: 1, sm: "41.666667%" }}>
            <ImgBox>
              <Image
                src={`https:${img}`}
                width={imgWidth}
                height={imgHeight}
                alt={title}
                layout="responsive"
              />
            </ImgBox>
          </Col>
        </Row>
      </Wrapper>
    </Section>
  );
};
