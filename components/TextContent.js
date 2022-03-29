import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Hero } from "./Hero";
import { Wrapper } from "./Wrap";

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.gray100};
  padding: 60px 0;

  ${mq.mdUp`
    padding: 0 0 100px;
  `}
`;

const SinglePost = styled.article`
  white-space: pre-line;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
  line-height: 1.4;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  margin-top: -107px;
  padding: 60px calc(30px + (107 - 30) * ((100vw - 320px) / (1279 - 320)))
    calc(60px + (87 - 60) * ((100vw - 320px) / (1279 - 320)));

  ${mq.xlUp`
    font-size: 20px;
    padding: 60px 107px 87px;
  `}

  h1 {
    font-size: calc(35px + (45 - 35) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 45px;
    `}
  }

  h2 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  h3 {
    font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    margin: 0 0 25px;
    color: ${(props) => props.theme.colors.blue};

    ${mq.xlUp`
      font-size: 30px;
  `}
  }

  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 20px;
    `}
  }

  ul {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    list-style: none;
    margin: 0 0 30px;
    padding: 0;

    ${mq.xlUp`
      font-size: 20px;
    `}

    li {
      margin-bottom: 15px;
      padding-left: 20px;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        background: url("./list-icon.svg") no-repeat;
        top: 7px;
        left: 0;
        width: 8px;
        height: 14px;
      }
    }
  }

  b {
    color: ${(props) => props.theme.colors.blue};
  }

  ${(props) =>
    props.sm === true &&
    `
    p {
      word-wrap: break-word;
      margin-bottom: 15px;
    }
  `}

  table {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    width: 100%;
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 20px;
    `}

    p {
      margin: 0;
    }

    th {
      background-color: ${(props) => props.theme.colors.gray100};
      border: 1px solid #878787;
      font-weight: 700;
      text-align: left;
      padding: 10px;

      ${mq.mdUp`
        padding: 15px 30px;
      `}
    }

    td {
      border: 1px solid #878787;
      padding: 10px;

      ${mq.mdUp`
        padding: 15px 30px;
      `}
    }
  }

  strong {
    color: ${(props) => props.theme.colors.blue};
  }

  iframe {
    width: 100%;
    max-width: 100%;
    display: block;
    margin: 0 auto 30px;
    max-height: 240px;

    ${mq.smUp`
      max-height: auto;
    `}
  }

  a:not(.btn) {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const TextContent = ({ title, img, txt }) => {
  return (
    <>
      <Hero
        id={0}
        bg={img}
        color={"rgba(2,91,139,.85)"}
        title={title}
        opacity="No"
        position="Left"
        size="sm"
        bolder="Yes"
      />
      {txt && (
        <Section>
          <Wrapper>
            <SinglePost>{documentToReactComponents(txt)}</SinglePost>
          </Wrapper>
        </Section>
      )}
    </>
  );
};
