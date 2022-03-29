import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import { mq } from "../src/utils/utils";
import { IconChevron } from "../src/svg/IconChevron";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Slide = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  height: 374px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.small !== "small" &&
    `
    height: 650px;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.6;
      background-color: ${(props) => props.theme.colors.blue};
    }
  `}
`;

const SlideTxt = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 30px;
  padding-bottom: 30px;

  ${mq.mdDown`
    padding-left: 20px;
    padding-right: 20px;
  `}

  ${mq.mdUp`
    padding-left: 100px;
    padding-right: 100px;
  `}

  h1,
  h2 {
    line-height: 1.25;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    margin: 0 0 8px;

    ${mq.xlDown`
      font-size: calc(40px + (70 - 40) * ((100vw - 320px) / (1599 - 320)));
    `}

    ${mq.xlUp`
      font-size: 70px;
    `}

    a {
      color: currentColor;
      display: inline-flex;
      align-items: center;

      svg {
        fill: ${(props) => props.theme.colors.white};
        margin-right: 20px;

        ${mq.mdDown`
          width: calc(14px + (30 - 14) * ((100vw - 320px) / (991 - 320)));
        `}

        @media (min-width: 1800px) {
          margin-left: -56px;
        }
      }
    }
  }

  h3 {
    line-height: 1.25;

    ${mq.xlDown`
      font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    `}

    ${mq.xlUp`
      font-size: 35px;
    `}

    color: ${(props) => props.theme.colors.white};
    margin: 0;
  }

  p {
    line-height: 1.25;
    color: ${(props) => props.theme.colors.white};
    font-weight: 300;
    margin: 0 0 47px;

    ${mq.xlDown`
      font-size: calc(20px + (40 - 20) * ((100vw - 320px) / (1599 - 320)));
    `}

    ${mq.xlUp`
      font-size: 40px;
    `}
  }

  ${(props) =>
    props.color === "blue" &&
    `
    h1,
    h2,
    h3,
    p {
      color: ${props.theme.colors.blue};
    }
  `}
`;

export const Slider = ({ allSlides, slides, small, color }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={pagination}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className={color === "blue" ? "slider-blue-dots" : null}
    >
      {slides.map((slide) =>
        allSlides.map(
          (item) =>
            slide.sys.id === item.sys.id && (
              <SwiperSlide key={item.sys.id}>
                <Slide
                  style={{
                    backgroundImage: `url(${item?.fields?.backgroundImage?.fields.file.url})`,
                  }}
                  small={small}
                >
                  <SlideTxt color={color}>
                    {item?.fields?.title && <h2>{item?.fields?.title}</h2>}
                    {item?.fields?.description && (
                      <p>{item?.fields?.description}</p>
                    )}
                    {item?.fields?.linkUrl && (
                      <a
                        href={item?.fields?.linkUrl}
                        className={`btn btn--${
                          color === "blue" ? "blue" : "outline-white"
                        }`}
                      >
                        {item?.fields?.linkLabel}
                        <IconChevron />
                      </a>
                    )}
                  </SlideTxt>
                </Slide>
              </SwiperSlide>
            )
        )
      )}
    </Swiper>
  );
};
