import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { IconChevron } from "../src/svg/IconChevron";

const ArticleImg = styled.div`
  display: flex;
  margin: 0 -15px;

  span {
    flex-shrink: 0;
  }

  ${mq.smUp`
    margin: -50px 0 0;
    justify-content: flex-end;

    img {
      max-width: inherit;
      flex-shrink: 0;
    }
  `}

  ${mq.btwSmLg`
    width: 40%;
  `}

  ${mq.lgUp`
    width: calc(524 / 1636 * 100%);
  `}
`;

const ArticleTxt = styled.div`
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
  line-height: 1.4;
  padding-top: 30px;
  padding-bottom: 30px;

  ${mq.btwSmLg`
    margin-right: calc(20px + (130 - 20) * ((100vw - 768px)/ (1599 - 768)));
  `}

  ${mq.lgUp`
    margin-right: 130px;
  `}

  h2 {
    font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;

    ${mq.lgUp`
      font-size: 35px;
    `}

    ${mq.mdUp`
      margin: 0 0 30px;
    `}
  }

  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    margin: 0;

    ${mq.lgUp`
      font-size: 20px;
    `}
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  margin: 0 -15px;
  padding: 0 15px;

  ${mq.smUp`
    margin: 0;
    padding: 0;
  `}

  ${mq.smDown`
    flex-direction: column;
  `}

  ${(props) =>
    props.gray === "Yes" &&
    `
    background-color: ${props.theme.colors.gray100};

    ${ArticleTxt} {
      flex-direction: row;
    }

    @media (min-width: 768px) and (max-width: 1599px) {
      ${ArticleTxt} {
        margin-left: calc(20px + (130 - 20) * ((100vw - 768px) / (1599 - 768)));
      }
    }

    @media (min-width: 1600px) {
      ${ArticleTxt} {
        margin-left: 130px;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin-right: -9999px;
        padding-right: 9999px;
        background-color: ${props.theme.colors.gray100};
      }
    }

    ${ArticleImg} {
      justify-content: flex-end;
      position: relative;
      z-index: 5;
    }
  `}
`;

const ArticleBtn = styled.div`
  padding: 35px 0;
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
  z-index: 2;

  ${mq.mdUp`
    margin-top: -50px;
    padding-top: 50px; 
  `}

  ${mq.smUp`
    &:not(:nth-child(odd)) {
      ${Article} {
        background-color: ${(props) => props.theme.colors.gray100};
        flex-direction: row-reverse;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          margin-left: -9999px;
          padding-left: 9999px;
          background-color: ${(props) => props.theme.colors.gray100};
        }
      }

      ${ArticleImg} {
        justify-content: flex-start;
      }
    }

    &:nth-child(odd) {
      @media (min-width: 768px) and (max-width: 1599px) {
        ${ArticleTxt} {
          margin-left: calc(20px + (130 - 20) * ((100vw - 768px) / (1599 - 768)));
        }
      }

      @media (min-width: 1600px) {
        ${ArticleTxt} {
          margin-left: 130px;
        }
      }
    }
  `}
`;

export const ImageTextBg = ({
  img,
  imgWidth,
  imgHeight,
  title,
  txt,
  link,
  linkLabel,
  gray,
}) => {
  return (
    <Section>
      <Wrapper>
        <Article gray={gray}>
          <ArticleImg>
            <Image
              src={`https:${img}`}
              width={imgWidth}
              height={imgHeight}
              alt={title}
              layout="fixed"
            />
          </ArticleImg>
          <ArticleTxt>
            <h2>{title}</h2>
            {txt}
            {link && (
              <ArticleBtn>
                <Link href={link}>
                  <a className="btn btn--blue">
                    {linkLabel}
                    <IconChevron />
                  </a>
                </Link>
              </ArticleBtn>
            )}
          </ArticleTxt>
        </Article>
      </Wrapper>
    </Section>
  );
};
