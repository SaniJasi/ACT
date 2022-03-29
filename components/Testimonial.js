import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";

const Section = styled.section`
  text-align: center;
  color: ${(props) => props.theme.colors.blue};
  padding: calc(60px + (100 - 60) * ((100vw - 320px) / (991 - 320))) 0;

  ${mq.mdUp`
    padding: 100px 50px;
  `}

  h2 {
    font-size: calc(25px + (45 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;

    ${mq.xlUp`
      font-size: 45px;
    `}

    ${mq.mdDown`
      margin: 0 0 calc(30px + (50 - 30) * ((100vw - 320px) / (991 - 320)));
    `}

    ${mq.mdUp`
      max-width: 85%;
      margin: 0 auto 50px;
    `}
  }

  h3 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    font-weight: 300;
    text-transform: uppercase;
    margin: 0;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }
`;

export const Testimonial = ({ author, desc }) => {
  return (
    <Section>
      <Wrapper>
        <article>
          {desc && <h2>{desc}</h2>}
          {author && <h3>{author}</h3>}
        </article>
      </Wrapper>
    </Section>
  );
};
