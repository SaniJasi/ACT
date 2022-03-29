import styled from "styled-components";
import { mq } from "../src/utils/utils";

const Section = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  margin: 0 auto;
  max-width: 1080px;
  position: relative;
  z-index: 2;
  margin-top: -107px;
  padding: 60px calc(30px + (107 - 30) * ((100vw - 320px) / (1279 - 320)))
    calc(60px + (87 - 60) * ((100vw - 320px) / (1279 - 320)));

  @include mq(lg) {
    padding: 60px 107px 87px;
  }

  ${mq.lgUp`
    padding: 60px 107px 87px;
  `}

  ${(props) => props.fullWidth === true && `max-width: inherit;`}
  ${(props) =>
    props.thx === true &&
    `
    margin-top: -350px;
    text-align: center;

    @media screen and (min-width: 768px) {
      padding-top: 150px;
      padding-bottom: 150px;
    }

    svg {
      display: block;
      margin: 0 auto 50px;
    }

    h1 {
      @include mq(md) {
        font-size: 60px;
      }
    }
  `}
`;

export const SinglePost = ({ children, fullWidth, thx }) => {
  return (
    <Section fullWidth={fullWidth} thx={thx}>
      {children}
    </Section>
  );
};
