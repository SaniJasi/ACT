import Link from "next/link";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { IconChevron } from "../src/svg/IconChevron";

const Section = styled.section`
  color: ${(props) => props.theme.colors.white};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  ${mq.mdDown`
    padding: calc(60px + (85 - 60) * ((100vw - 320px) / (991 - 320))) 0;
  `}

  ${mq.mdUp`
    ${(props) =>
      props.center === "Center" ? "padding: 150px 0;" : "padding: 100px 0;"}
  `}

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    opacity: 0.9;
    background-color: ${(props) => props.theme.colors.blue};
  }

  > div {
    position: relative;
    z-index: 2;
  }

  article {
    ${mq.mdUp`
      max-width: 75%;

      ${(props) => props.center === "Center" && "margin: 0 auto;"}
    `}
  }

  h3 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    font-weight: 300;
    line-height: 1.25;
    text-transform: uppercase;
    margin: 0 0 25px;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  h2 {
    font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    margin: 0 0 10px;

    ${mq.xlUp`
      font-size: 40px;
    `}
  }

  p {
    font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    font-weight: 300;
    margin: 0 0 45px;

    ${mq.xlUp`
      font-size: 40px;
    `}
  }

  ${(props) =>
    props.center === "Center" &&
    `
    text-align: center;

    p {
      margin: 0;
    }
  `}
`;

export const FeaturedTxt = ({
  center,
  bg,
  subtitle,
  title,
  txt,
  link,
  linkLabel,
}) => {
  return (
    <Section style={{ backgroundImage: `url(${bg})` }} center={center}>
      <Wrapper>
        <article>
          {subtitle && <h3>{subtitle}</h3>}
          {title && <h2>{title}</h2>}
          {txt && <p>{txt}</p>}
          {link && (
            <Link href={link}>
              <a className="btn btn--primary btn--white">
                {linkLabel}
                <IconChevron />
              </a>
            </Link>
          )}
        </article>
      </Wrapper>
    </Section>
  );
};
