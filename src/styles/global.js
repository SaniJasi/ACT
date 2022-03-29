import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { between, lighten, darken } from "polished";
import { clamp, mq } from "../utils/utils";

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  * {
    -webkit-tap-highlight-color: transparent;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${(props) => props.theme.colors.pink};
    color: #fff;
  }

  body {
    background-color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.txt};
    
    &.mm-visible,
    &.popup-visible,
    &.contact-modal-visible {
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
  }

  input:not([type="radio"]),
  textarea {
    appearance: none;
    border-radius: 0;
    width: 100%;
    border: 0;
    outline: none;
  }

  .btn {
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.08em;
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    border: 1px solid transparent;
    appearance: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color .2s ease-out, border-color .2s ease-out, color .2s ease-out;
    outline: none;
    position: relative;
    word-wrap: break-word;

    ${mq.smDown`
      padding: 17px 40px;
    `}

    ${mq.smUp`
      font-size: 20px;
      padding: 17px 80px;
      min-width: 278px;
    `}

    svg {
      transition: fill .2s ease-out;
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      right: 20px;
    }

    &--white {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.blue};

      svg {
        fill: ${(props) => props.theme.colors.blue};
      }

      &:hover {
        background-color: transparent;
        border-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.white};

        svg {
          fill: ${(props) => props.theme.colors.white};
        }
      }
    }

    &--blue {
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};

      svg {
        fill: ${(props) => props.theme.colors.white};
      }

      &:hover {
        background-color: transparent;
        border-color: ${(props) => props.theme.colors.blue};
        color: ${(props) => props.theme.colors.blue};

        svg {
          fill: ${(props) => props.theme.colors.blue};
        }
      }
    }

    &--disabled {
      cursor: default;
      color: ${(props) => props.theme.colors.black};
      background-color: ${(props) => props.theme.colors.gray100};
    }

    &--outline-white {
      border-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.white};

      svg {
        fill: ${(props) => props.theme.colors.white};
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.blue};

        svg {
          fill: ${(props) => props.theme.colors.blue};
        }
      }
    }

    &--outline-blue {
      border-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.blue};

      svg {
        fill: ${(props) => props.theme.colors.blue};
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.blue};
        color: ${(props) => props.theme.colors.white};

        svg {
          fill: ${(props) => props.theme.colors.white};
        }
      }
    }
  }

  .swiper-pagination {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 37px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin: 0 4px;
      width: 14px;
      height: 14px;
      border: 1px solid ${(props) => props.theme.colors.white};
      border-radius: 50%;
      transition: background-color .2s ease-out;
      text-indent: -9999px;
      cursor: pointer;
    }

    .swiper-pagination-bullet-active {
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  .swiper-pagination-bullet:only-child {
    visibility: hidden;
  }

  .slider-blue-dots .swiper-pagination span {
    border-color: ${(props) => props.theme.colors.blue};
  }

  .slider-blue-dots .swiper-pagination .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.colors.blue};
  }

  .form-group {
    position: relative;

    label {
      display: block;
      font-size: 20px;
      font-weight: 700;
      line-height: 1;
      margin: 0 0 10px;
    }

    input:not([type="submit"]):not([type="radio"]),
    select {
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 3px;
      border: 1px solid #878787;
      height: 42px;
      margin: 0 0 25px;
      padding: 0 15px;
    }

    textarea {
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 3px;
      border: 1px solid #878787;
      height: 125px;
      margin: 0 0 25px;
      padding: 10px 15px;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 100%;
      padding-right: 30px;
      background: url('../img/dropdown.svg') no-repeat calc(100% - 10px) center ${(
        props
      ) => props.theme.colors.white};
    }
  }

  .form-group__error {
    color: ${(props) => props.theme.colors.red};
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .popup-is-visible {
    overflow: hidden;
  }
`;
