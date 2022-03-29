import { useState, memo } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FormiumForm, defaultComponents } from "@formium/react";
import { formium } from "../lib/formium";
import { mq } from "../src/utils/utils";
import { IconChevron } from "../src/svg/IconChevron";
import { IconClose } from "../src/svg/IconClose";

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

const SectionSlide = styled.div`
  text-align: center;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props) => props.opacity !== "No" && `opacity: 0.6;`}
    background-color: ${(props) => (props.color ? props.color : "#000")};
  }

  ${(props) =>
    props.size === "sm" &&
    `
    height: 280px;

    @media (min-width: 768px) {
      height: 400px;
    }
  `}
`;

const SectionTxt = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;

  ${mq.mdUp`
    padding-left: 100px;
    padding-right: 100px;
  `}

  ${(props) => props.position === "Center" && `text-align: center !important;`}
  ${(props) =>
    props.position === "Left" &&
    `text-align: left !important; max-width: ${props.theme.sizes.wrap}px;
  padding: 0 ${props.theme.sizes.padding}px !important; margin: 0 auto; width: 100%;`}

  h1,
  h2 {
    font-size: calc(40px + (70 - 40) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    margin: 0 0 8px;
    white-space: pre-line;

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
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.white};
    margin: 0;
    white-space: pre-line;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  ${(props) =>
    props.bolder === "Yes" &&
    `
    h1 {
      font-weight: 700;
    }
  `}

  p {
    font-size: calc(20px + (40 - 20) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.white};
    font-weight: 300;
    margin: 0 0 47px;

    ${mq.xlUp`
      font-size: 40px;
    `}
  }
`;

const Back = styled.a`
  font-size: calc(40px + (70 - 40) * ((100vw - 320px) / (1599 - 320)));
  line-height: 1.25;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  display: inline-flex;
  align-items: center;

  ${mq.xlUp`
    font-size: 70px;
  `}

  svg {
    fill: ${(props) => props.theme.colors.white};
    margin-right: 20px;
    width: 30px;
    height: 58px;
    transform: rotate(-180deg);
  }
`;

const Button = styled.button``;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 30px;
  background-color: rgba(2, 91, 139, 0.51);
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  opacity: 0;
  visibility: hidden;

  .popup-is-visible & {
    opacity: 1;
    visibility: visible;
  }
`;

const ModalBox = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 664px;
  border-radius: 6px;
  position: relative;
  z-index: 2;
  margin: auto;
  padding: calc(40px + (80 - 40) * ((100vw - 320px) / (991 - 320)))
    calc(30px + (140 - 30) * ((100vw - 320px) / (991 - 320)));

  ${mq.mdUp`
    padding: 80px 140px;
  `}

  input::placeholder {
    opacity: 0;
  }

  h2 {
    text-align: center;
    font-size: calc(35px + (45 - 35) * ((100vw - 320px) / (1599 - 320)));
    color: ${(props) => props.theme.colors.blue};

    ${mq.xlUp`
      font-size: 45px;
    `};
  }

  form button {
    font-size: 20px;
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
    transition: background-color 0.2s ease-out, border-color 0.2s ease-out,
      color 0.2s ease-out;
    outline: none;
    position: relative;
    word-wrap: break-word;
    width: 100%;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};

    ${mq.smDown`
      padding: 17px 40px;
    `}

    ${mq.smUp`
      padding: 17px 80px;
      min-width: 278px;
    `}
  }

  .form-group__error {
    position: relative;
    margin: -10px 0 15px;
  }
`;

const ModalClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  fill: ${(props) => props.theme.colors.gray200};
`;

const Thx = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.green};
  text-align: center;
`;

const FormControl = memo(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}) {
  const [success, setSuccess] = useState(false);
  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <div className={`form-group${error !== false ? " form-group--error" : ""}`}>
      {label && <label htmlFor={labelFor}>{label}</label>}
      {description && <div>{description}</div>}
      {children}
      {error && <div className="form-group__error">{error}</div>}
    </div>
  );
});

const components = {
  ...defaultComponents,
  FormControl,
};

export const Hero = ({
  bg,
  color,
  size = "sm",
  title,
  subtitle,
  txt,
  position,
  bolder,
  opacity,
  linkLabel,
  id,
  back,
  form,
}) => {
  const [success, setSuccess] = useState(false);
  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  const openPopup = () => {
    document.body.classList.add("popup-is-visible");
  };
  const closePopup = () => {
    document.body.classList.remove("popup-is-visible");
  };

  return (
    <Section>
      <SectionSlide
        size={size}
        style={{ backgroundImage: `url(${bg})` }}
        color={color}
        opacity={opacity}
      >
        <SectionTxt position={position} bolder={bolder}>
          {id === 0 ? (
            <>
              {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
              {subtitle && <h3>{subtitle}</h3>}
            </>
          ) : (
            title && <h3 dangerouslySetInnerHTML={{ __html: title }} />
          )}
          {txt && <p>{txt}</p>}
          {linkLabel && (
            <Button className="btn btn--white" onClick={openPopup}>
              {linkLabel}
              <IconChevron />
            </Button>
          )}
          {back && (
            <Link href={"/news"} passHref>
              <Back>
                <IconChevron />
                News
              </Back>
            </Link>
          )}
        </SectionTxt>
      </SectionSlide>
      {linkLabel && (
        <Modal>
          <ModalBox>
            <ModalClose onClick={closePopup}>
              <IconClose />
            </ModalClose>
            <h2>Registration</h2>
            {form !== undefined &&
              (success !== true ? (
                <FormiumForm
                  data={form}
                  components={components}
                  onSubmit={async (values) => {
                    await formium.submitForm("modal", values);
                    setSuccess(true);
                  }}
                />
              ) : (
                <Thx>Thank you! The message has been sent.</Thx>
              ))}
          </ModalBox>
        </Modal>
      )}
    </Section>
  );
};
