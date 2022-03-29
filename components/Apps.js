import styled from "styled-components";
import Image from "next/image";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";

const AppSection = styled.section`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.54;
    background-color: ${(props) => props.theme.colors.black};
  }

  > div {
    position: relative;
    z-index: 2;
  }
`;

const AppBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 94px 0 0;

  ${mq.mdDown`
    flex-direction: column-reverse;
    align-items: flex-start;
  `}
`;

const AppImg = styled.div`
  display: none;

  ${mq.smUp`
    display: flex;
  `}

  ${mq.xlUp`
    margin-left: -80px;
  `}
`;

const AppTxt = styled.div`
  color: ${(props) => props.theme.colors.white};
  flex: 1;

  ${mq.mdDown`
    width: 100%;
    margin-bottom: calc(50px + (110 - 50) * ((100vw - 320px) / (991 - 320)));
  `}

  ${mq.mdUp`
    margin-bottom: 110px;
  `}

  ${mq.btwMdXl`
    margin-left: calc(20px + (170 - 20) * ((100vw - 992px) / (1599 - 992)));
  `}

  ${mq.xlUp`
    margin-left: 170px;
  `}

  h3 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    text-transform: uppercase;
    font-weight: 300;
    margin: 0 0 calc(35px + (50 - 35) * ((100vw - 320px) / (1599 - 320)));

    ${mq.xlUp`
      font-size: 35px;
      margin: 0 0 50px;
    `}
  }

  h2 {
    font-size: calc(35px + (45 - 35) * ((100vw - 320px) / (1599 - 320)));
    margin: 0;
    line-height: 1.4;

    ${mq.xlUp`
    font-size: 45px;
  `}
  }

  p {
    font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1599 - 320)));
    font-weight: 300;
    margin: 0 0 40px;
    line-height: 1.25;

    ${mq.xlUp`
      font-size: 40px;
      margin: 0 0 60px;  
    `}
  }
`;

const AppBtn = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin: 0 0 20px;
  }

  ${mq.smUp`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    a:first-child {
      margin-right: 30px;
    }
  `}
`;

export const Apps = ({ list }) => {
  const appInfo = list[0];

  return (
    <AppSection
      style={{
        backgroundImage: `url(${appInfo?.fields?.backgroundImage?.fields.file.url})`,
      }}
    >
      <Wrapper>
        <AppBox>
          <AppImg>
            <Image
              src={`https:${appInfo?.fields?.image?.fields.file.url}`}
              layout="fixed"
              width={appInfo?.fields?.image?.fields.file.details.image.width}
              height={appInfo?.fields?.image?.fields.file.details.image.height}
              alt={appInfo?.fields?.image?.fields.description}
            />
          </AppImg>
          <AppTxt>
            {appInfo?.fields?.title && <h3>{appInfo?.fields?.title}</h3>}
            {appInfo?.fields?.subtitle && <h2>{appInfo?.fields?.subtitle}</h2>}
            {appInfo?.fields?.description && (
              <p>{appInfo?.fields?.description}</p>
            )}
            {(appInfo?.fields?.appStoreLink ||
              appInfo?.fields?.googlePlayLink) && (
              <AppBtn>
                {appInfo?.fields?.appStoreLink && (
                  <a
                    href={appInfo?.fields?.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/ios.svg"
                      layout="fixed"
                      width={293}
                      height={84}
                      alt="App Store"
                    />
                  </a>
                )}
                {appInfo?.fields?.googlePlayLink && (
                  <a
                    href={appInfo?.fields?.googlePlayLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/android.svg"
                      layout="fixed"
                      width={293}
                      height={84}
                      alt="Google Play"
                    />
                  </a>
                )}
              </AppBtn>
            )}
          </AppTxt>
        </AppBox>
      </Wrapper>
    </AppSection>
  );
};
