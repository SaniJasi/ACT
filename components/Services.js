import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { Row } from "./Row";
import { Col } from "./Col";
import { Service } from "./Service";

const Section = styled.section`
  padding: calc(60px + (100 - 60) * ((100vw - 320px) / (991 - 320))) 0;

  ${mq.mdUp`
    padding: 100px 0;
  `}
`;

export const Services = ({ list, allList }) => {
  return (
    <Section>
      <Wrapper>
        <Row>
          {list.map((item) =>
            allList.map(
              (allItem) =>
                item.sys.id === allItem.sys.id && (
                  <Col
                    width={{ _: 1, sm: "50%", md: "25%" }}
                    key={allItem.sys.id}
                  >
                    <Service
                      svg={`https:${allItem?.fields?.icon?.fields.file.url}`}
                      svgWidth={
                        allItem?.fields?.icon?.fields.file.details.image.width
                      }
                      svgHeight={
                        allItem?.fields?.icon?.fields.file.details.image.height
                      }
                      title={allItem?.fields?.title}
                      txt={allItem?.fields?.description}
                      link={allItem?.fields?.link}
                      linkLabel={allItem?.fields?.linkLabel}
                    />
                  </Col>
                )
            )
          )}
        </Row>
      </Wrapper>
    </Section>
  );
};
