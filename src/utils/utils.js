import { css } from "styled-components";
import { between } from "polished";

export const clamp = (a, b, c = 375, d = 1280) => {
  return `max(
    ${a},
    min(${between(a, b, `${c}px`, `${d}px`)}, ${b})
  )`;
};

export const mq = {
  xs: (...args) => css`
    @media screen and (max-width: 374px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media screen and (max-width: 767px) {
      ${css(...args)}
    }
  `,
  smDown: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)}
    }
  `,
  btwSmMd: (...args) => css`
    @media (min-width: 768px) and (max-width: 991px) {
      ${css(...args)}
    }
  `,
  btwSmXl: (...args) => css`
    @media (min-width: 768px) and (max-width: 1599px) {
      ${css(...args)}
    }
  `,
  btwSmLg: (...args) => css`
    @media (min-width: 768px) and (max-width: 1279px) {
      ${css(...args)}
    }
  `,
  smUp: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  mdDown: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  mdUp: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  btwMdXl: (...args) => css`
    @media (min-width: 992px) and (max-width: 1599px) {
      ${css(...args)}
    }
  `,
  btwMdLg: (...args) => css`
    @media (min-width: 992px) and (max-width: 1279px) {
      ${css(...args)}
    }
  `,
  lgUp: (...args) => css`
    @media (min-width: 1280px) {
      ${css(...args)}
    }
  `,
  xlDown: (...args) => css`
    @media (max-width: 1599px) {
      ${css(...args)}
    }
  `,
  xlUp: (...args) => css`
    @media (min-width: 1600px) {
      ${css(...args)}
    }
  `,
};

export const formatDate = (dateFormat) => {
  const date = new Date(dateFormat);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", {
    month: "short",
  });
  const day = date.getDate();

  return `${day} ${month}, ${year}`;
};
