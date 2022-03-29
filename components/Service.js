import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { mq } from "../src/utils/utils";

const Box = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 50px;
  height: 100%;

  h2 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.blue};
    font-weight: 400;
    text-transform: uppercase;
    white-space: pre-line;
    margin: 0 0 25px;

    ${mq.smUp`
      min-height: 100px;
      margin: 0 0 15px;
    `}

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    max-width: 324px;
    margin: 0 auto 20px;
    line-height: 1.2;

    ${mq.smUp`
      margin-bottom: 0;
    `}

    ${mq.xlUp`
      font-size: 20px;
    `}
  }

  a {
    font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1599 - 320)));
    color: ${(props) => props.theme.colors.blue100};
    text-transform: uppercase;

    ${mq.smUp`
      position: absolute;
      left: 50%;
      bottom: 0;
      transition: color 0.2s ease-out;
      transform: translate3d(-50%, 0, 0);
    `}

    &:hover {
      color: ${(props) => props.theme.colors.blue};
    }

    ${mq.xlUp`
      font-size: 16px;
    `}
  }
`;

const BoxImg = styled.div`
  height: 90px;
`;

export const Service = ({
  svg,
  svgWidth,
  svgHeight,
  title,
  txt,
  link,
  linkLabel,
}) => {
  return (
    <Box>
      <BoxImg>
        {svg && (
          <Image
            src={svg}
            layout="fixed"
            width={svgWidth}
            height={svgHeight}
            alt=""
          />
        )}
      </BoxImg>
      {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
      {txt && <p>{txt}</p>}
      <Link href={link}>
        <a>{linkLabel}</a>
      </Link>
    </Box>
  );
};
