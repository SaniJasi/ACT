import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Col } from "./Col";
import { mq } from "../src/utils/utils";

const ArticleLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: block;
`;

const ArticleImg = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  position: relative;
  overflow: hidden;
  height: calc(300px + (340 - 300) * ((100vw - 992px) / (1599 - 992)));
  margin: 0 0 20px;

  ${mq.xlUp`
    height: 340px;
  `}

  span {
    max-width: 100%;
    max-height: 100%;
  }

  em {
    position: absolute;
    left: 0;
    z-index: 2;
    bottom: 0;
    width: 97px;
    height: 97px;
    background-color: ${(props) => props.theme.colors.blue};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }

  div {
    font-size: 20px;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.blue};
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const Article = styled.article`
  position: relative;

  ${(props) =>
    props.view === "video"
      ? `
    ${ArticleImg} {
      div {
        transition: width .3s ease-out;
        width: 0;
        overflow: hidden;
      }
    }

    &:hover {
      ${ArticleImg} {
        div {
          width: 100%;
        }
      }
    }
  `
      : `
    
    ${ArticleImg} {
      div {
        transition: transform .3s ease-out;
        transform: translate3d(0, 100%, 0);
      }
    }

    &:hover {
      ${ArticleImg} {
        div {
          transform: translate3d(0, 0, 0);
        }
      }
    }
  `}

  h2 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 0 15px;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    margin: 0;

    ${mq.xlUp`
      font-size: 20px;
    `}
  }
`;

export const News = ({ view, img, imgWidth, imgHeight, title, txt, url }) => {
  return (
    <Col width={{ _: 1, md: "50%", lg: "33.333333%" }}>
      <Article view={view}>
        <Link href={`/news/${url}`} passHref>
          <ArticleLink></ArticleLink>
        </Link>
        <ArticleImg>
          <Image
            src={`https:${img}`}
            width={imgWidth}
            height={imgHeight}
            alt={title}
            layout="fixed"
          />
          {view === "video" && (
            <em>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="42"
                viewBox="0 0 32 42"
              >
                <path
                  d="M21,0,42,32H0Z"
                  transform="translate(32) rotate(90)"
                ></path>
              </svg>
            </em>
          )}
          <div>visit page</div>
        </ArticleImg>
        {title && <h2>{title}</h2>}
        {txt && <p>{txt}</p>}
      </Article>
    </Col>
  );
};
