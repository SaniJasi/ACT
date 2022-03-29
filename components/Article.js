import Link from "next/link";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { IconChevron } from "../src/svg/IconChevron";

const ArticleTxt = styled.article`
  white-space: pre-line;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
  line-height: 1.4;

  ${mq.xlUp`
    font-size: 20px;
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
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  h3 {
    font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    margin: 0 0 25px;

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

  &__img-center {
    display: block;
    margin: 0 auto 30px;
  }

  &__btn {
    padding: 35px 0;
  }

  &--blue-titles {
    h2,
    h3,
    h4 {
      color: ${(props) => props.theme.colors.blue};
    }

    h3 {
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  a:not(.btn) {
    color: ${(props) => props.theme.colors.blue};
  }

  .btn {
    margin-top: 40px;
  }
`;

const ArticleLink = styled.div`
  padding: 35px 0;
`;

export const Article = ({ children, link, linkLabel }) => {
  return (
    <ArticleTxt>
      {children}
      {link && (
        <ArticleLink>
          <Link href={link}>
            <a className="btn btn--blue">
              {linkLabel}
              <IconChevron />
            </a>
          </Link>
        </ArticleLink>
      )}
    </ArticleTxt>
  );
};
