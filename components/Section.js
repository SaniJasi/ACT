import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";

const Box = styled.section`
  text-align: center;
  padding: 60px 0;

  ${mq.mdUp`
    padding: 100px 0;
  `}

  ${(props) =>
    props.gray && `background-color: ${(props) => props.theme.colors.gray100};`}

  ${(props) => props.noPt && `padding-top: 0;`}

  ${(props) => props.noPb && `padding-bottom: 0;`}

  p {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    max-width: 1230px;
    margin: 0 auto;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  a {
    margin-top: 40px;
  }
`;

const BoxTitle = styled.div`
  text-align: center;
  margin: 0 0 calc(35px + (50 - 35) * ((100vw - 992px) / (1599 - 992)));

  ${mq.mdUp`
    margin: 0 0 50px;
  `}

  h2 {
    font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.blue};
    margin: 0;

    ${mq.xlUp`
      font-size: 40px;
    `}
  }

  ${(props) => props.noMb === true && "margin-bottom: 0 !important;"}
`;

export const Section = ({
  title,
  children,
  noMb,
  gray,
  noPt = false,
  noPb = false,
}) => {
  return (
    <Box gray={gray} noPt={noPt} noPb={noPb}>
      <Wrapper>
        {title && (
          <BoxTitle noMb={noMb}>
            <h2>{title}</h2>
          </BoxTitle>
        )}
        {children}
      </Wrapper>
    </Box>
  );
};
