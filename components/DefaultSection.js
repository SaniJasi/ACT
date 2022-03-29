import Image from "next/image";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { mq } from "../src/utils/utils";
import { Article } from "./Article";
import { Row } from "./Row";
import { Col } from "./Col";
import { Wrapper } from "./Wrap";

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;

  span {
    flex-shrink: 0;
  }
`;

const Section = styled.section`
  padding: calc(60px + (100 - 60) * ((100vw - 992px) / (1599 - 992))) 0 0;

  ${(props) =>
    props.bg &&
    `
    background-color: ${props.bg};
  `}

  ${mq.mdUp`
    padding: 100px 0 0;
  `}

  ${(props) => props.padding && `${props.padding} !important;`}
`;

export const DefaultSection = ({
  bg,
  title,
  txt,
  link,
  linkLabel,
  img,
  imgWidth,
  imgHeight,
  padding,
}) => {
  return (
    <Section bg={bg} padding={padding}>
      <Wrapper>
        <Row>
          <Col width={{ _: 1, sm: "41.666667%" }}>
            <ImgBox>
              <Image
                src={`https:${img}`}
                width={imgWidth}
                height={imgHeight}
                alt={title}
                layout="fixed"
              />
            </ImgBox>
          </Col>
          <Col width={{ _: 1, sm: "58.333333%" }}>
            <Article link={link} linkLabel={linkLabel}>
              {title && <h2>{title}</h2>}
              {txt && documentToReactComponents(txt)}
            </Article>
          </Col>
        </Row>
      </Wrapper>
    </Section>
  );
};
