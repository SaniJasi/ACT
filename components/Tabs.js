import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { Row } from "./Row";
import { Col } from "./Col";
import { Article } from "./Article";
import { IconChevron } from "../src/svg/IconChevron";
import { IconChevronBolder } from "../src/svg/IconChevronBolder";

const Tab = styled.section`
  ${(props) =>
    props.partners === "Yes" &&
    `  
    background-color: ${props.theme.colors.gray100};
    padding: 50px 0;
    overflow: hidden;

    @media (min-width: 768px) {
      padding: 50px 0 0;
    }
  `}

  .tab-row {
    flex-direction: column-reverse;

    ${mq.mdUp`
      flex-direction: row-reverse;

      [data-large-img-box] {
        justify-content: flex-start;
        align-items: flex-end;
      }
    `}
  }
`;

const TabUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  li {
    line-height: 1;
    text-transform: uppercase;
    color: #878787;
    transition: color 0.3s ease-out;
    padding: 15px 0;

    ${mq.smDown`
      font-size: 12px;
    `}

    ${mq.btwSmXl`
      font-size: calc(16px + (25 - 16) * ((100vw - 768px) / (1599 - 768)));
    `} 

    ${mq.xlUp`
      font-size: 25px;
    `} 

    &:not(.is-active) {
      cursor: pointer;
    }

    &.is-active {
      color: ${(props) => props.theme.colors.blue};
    }
  }

  ${(props) =>
    props.alignLeft === true &&
    `
    justify-content: flex-start;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  `}
`;

const TabBox = styled.div`
  ${mq.mdUp`
    height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-out;

    &.is-visible {
      opacity: 1;
      visibility: visible;
      height: auto;
      overflow: visible;
    }
  `}

  ${(props) =>
    props.position === "Left" &&
    `.tab-row {
      flex-direction: row;

      [data-large-img-box] {
        justify-content: flex-end;
      }
    }`}
`;

const TabSeparatorTabs = styled.div`
  position: relative;
  margin: 0 0 34px;
  display: none;
  flex: 1;

  ${mq.smUp`
    display: flex;
  `}
`;

const TabSeparator = styled.span`
  position: absolute;
  height: 5px;
  width: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.blue};
  transition: transform 0.3s ease-out, with 0.3s ease-out 0.2s;
`;

const LargeImgBox = styled.div`
  display: none;

  ${mq.smUp`
    display: flex;
    height: 100%;
  `}

  ${mq.mdDown`
    padding-top: 50px;

    img {
      display: block;
    }
  `}

  > span {
    flex-shrink: 0;
  }

  ${mq.mdUp`
    justify-content: flex-end;

    img {
      max-width: inherit;
    }
  `}
`;

const ArticleBtn = styled.div`
  ${mq.smUp`
    padding: 35px 0;
  `}
`;

const MobileTab = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.blue};

  ${mq.smUp`
    display: none;
  `}

  svg {
    fill: ${(props) => props.theme.colors.blue};
    width: auto;
    height: 12px;
    transition: transform 0.2s ease-in-out;

    .is-visible & {
      transform: rotate(-180deg);
    }
  }
`;

const MobileContainer = styled.div`
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${mq.smUp`
    opacity: 1;
    height: auto;
    overflow: visible;
  `}

  .is-visible & {
    height: auto;
    opacity: 1;

    article {
      padding: 30px 0;
    }
  }
`;

export const Tabs = ({ partners, position, list, allList }) => {
  const refs = useRef([]);
  const showMobileSlider = (index) => {
    refs.current[index]
      .closest("[data-tab-box]")
      .classList.toggle("is-visible");
  };

  useEffect(() => {
    const tabs = document.querySelectorAll("[data-tab]");

    tabs.forEach((tab) => {
      const li = tab.querySelectorAll("[data-tab-list] li");
      const separator = tab.querySelector("[data-tab-separator]");
      const tabBoxes = tab.querySelectorAll("[data-tab-box]");
      const activeClassName = "is-active";
      const visibleClassName = "is-visible";

      setTimeout(() => {
        separator.style.width = `${li[0].clientWidth}px`;
      }, 300);

      li.forEach((item) => {
        item.addEventListener("click", () => {
          li.forEach((el) => {
            el.classList.remove(activeClassName);
          });

          tabBoxes.forEach((el) => {
            el.classList.remove(visibleClassName);
          });

          item.classList.add(activeClassName);
          document
            .getElementById(item.getAttribute("data-show-tab"))
            .classList.add(visibleClassName);

          const separatorPosition = () => {
            const activeEL = tab.querySelector(`.${activeClassName}`);
            const positionEl = activeEL.offsetLeft;
            const widthEl = activeEL.clientWidth;

            separator.style.transform = `translate3d(${positionEl}px, 0, 0)`;
            separator.style.width = `${widthEl}px`;
          };

          separatorPosition();

          window.addEventListener("resize", separatorPosition);
        });
      });
    });
  });

  return (
    <Tab partners={partners} data-tab>
      <Wrapper>
        {position === "Left" ? (
          <Row>
            <Col width={{ _: 1, lg: "38%" }}></Col>
            <Col width={{ _: 1, lg: "62%" }}>
              <TabSeparatorTabs>
                <TabUl alignLeft={true} data-tab-list>
                  {list.map((item, index) =>
                    allList.map(
                      (itemAll) =>
                        item.sys.id === itemAll.sys.id && (
                          <li
                            key={itemAll.sys.id}
                            className={index === 0 ? "is-active" : null}
                            data-show-tab={`tab-${index + 1}`}
                          >
                            {itemAll?.fields?.tabTitle}
                          </li>
                        )
                    )
                  )}
                </TabUl>
                <TabSeparator data-tab-separator />
              </TabSeparatorTabs>
            </Col>
          </Row>
        ) : (
          <TabSeparatorTabs>
            <TabUl alignLeft={true} data-tab-list>
              {list.map((item, index) =>
                allList.map(
                  (itemAll) =>
                    item.sys.id === itemAll.sys.id && (
                      <li
                        key={itemAll.sys.id}
                        className={index === 0 ? "is-active" : null}
                        data-show-tab={`tab-${index + 1}`}
                      >
                        {itemAll?.fields?.tabTitle}
                      </li>
                    )
                )
              )}
            </TabUl>
            <TabSeparator data-tab-separator />
          </TabSeparatorTabs>
        )}
        {list.map((item, index) =>
          allList.map(
            (itemAll) =>
              item.sys.id === itemAll.sys.id && (
                <TabBox
                  key={itemAll.sys.id}
                  id={`tab-${index + 1}`}
                  className={index === 0 ? "is-visible" : null}
                  data-tab-box
                  position={position}
                >
                  <MobileTab
                    ref={(element) => {
                      refs.current[index] = element;
                    }}
                    onClick={() => showMobileSlider(index)}
                  >
                    {itemAll?.fields?.tabTitle}
                    <IconChevronBolder />
                  </MobileTab>
                  <MobileContainer>
                    <Row className="tab-row">
                      <Col width={{ _: 1, lg: "41.666667%" }}>
                        <LargeImgBox data-large-img-box>
                          <Image
                            src={`https:${itemAll?.fields?.image?.fields.file.url}`}
                            width={
                              itemAll?.fields?.image?.fields.file.details.image
                                .width
                            }
                            height={
                              itemAll?.fields?.image?.fields.file.details.image
                                .height
                            }
                            layout="fixed"
                            alt={itemAll?.fields?.image?.fields.description}
                            priority={true}
                          />
                        </LargeImgBox>
                      </Col>
                      <Col width={{ _: 1, lg: "58.333333%" }}>
                        <Article>
                          {itemAll?.fields?.title && (
                            <h2>{itemAll?.fields?.title}</h2>
                          )}
                          {itemAll?.fields?.description &&
                            documentToReactComponents(
                              itemAll?.fields?.description
                            )}
                          {itemAll?.fields?.link && (
                            <ArticleBtn>
                              <Link href={itemAll?.fields?.link}>
                                <a className="btn btn--blue">
                                  {itemAll?.fields?.linkLabel}
                                  <IconChevron />
                                </a>
                              </Link>
                            </ArticleBtn>
                          )}
                        </Article>
                      </Col>
                    </Row>
                  </MobileContainer>
                </TabBox>
              )
          )
        )}
      </Wrapper>
    </Tab>
  );
};
