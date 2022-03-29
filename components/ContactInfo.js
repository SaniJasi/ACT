import { useState, memo } from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import { FormiumForm, defaultComponents } from "@formium/react";
import { formium } from "../lib/formium";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { SinglePost } from "./SinglePost";
import { Row } from "./Row";
import { Col } from "./Col";
import { Article } from "./Article";

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.gray100};
  padding: 0 0 calc(60px + (100 - 60) * ((100vw - 992px) / (1599 - 992)));

  ${mq.mdUp`
    padding: 0 0 100px;
  `}
`;

const Info = styled.div`
  h2 {
    font-size: calc(30px + (40 - 30) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 0 35px;

    ${mq.xlUp`
      font-size: 40px;
    `}
  }

  img {
    display: block;
    margin-bottom: 50px;
  }
`;

const Map = styled.div`
  padding-top: 60px;
`;

const ContactImg = styled.div`
  padding: 0 0 40px;

  ${mq.smUp`
    padding: 20px 0 0;
  `}

  img {
    display: block;
  }
`;

const Form = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  form > div:nth-child(even),
  form > div:nth-child(odd) {
    width: 100%;
    margin: 0 0 20px;
    padding: 0 15px;

    ${mq.smUp`
      width: 50%;
    `}
  }

  form > div:last-of-type {
    width: 100%;
  }

  button {
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
    width: calc(100% - 30px);
    margin: 0 15px;
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};

    ${mq.smDown`
      padding: 17px 40px;
    `}

    ${mq.smUp`
      padding: 17px 80px;
      min-width: 278px;
    `}

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
`;

const Thx = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.green};
`;

const FormControl = memo(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}) {
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

export const ContactInfo = ({
  form,
  address,
  email,
  getInTouch,
  howCanWeHelp,
  phone,
  img,
  imgWidth,
  imgHeight,
  mapCode,
}) => {
  const [success, setSuccess] = useState(false);
  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <Section>
      <Wrapper>
        <SinglePost fullWidth={true}>
          <Row>
            <Col width={{ _: 1, lg: "25%" }}>
              <Info>
                {getInTouch && (
                  <>
                    <h2>Get in touch</h2>
                    <Article>{documentToReactComponents(getInTouch)}</Article>
                  </>
                )}
                <Article sm={true}>
                  {email && (
                    <>
                      <p>
                        <strong>Email</strong>
                        <br />
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    </>
                  )}
                  {phone && (
                    <>
                      <p>
                        <strong>Phone</strong>
                        <br />
                        <a href={`tel:${phone}`}>{phone}</a>
                      </p>
                    </>
                  )}
                  {address && (
                    <>
                      <p>
                        <strong>Address</strong>
                        <br />
                        {address}
                      </p>
                    </>
                  )}
                </Article>
              </Info>
              {img && (
                <ContactImg>
                  <Image
                    src={`https:${img}`}
                    width={imgWidth}
                    height={imgHeight}
                    alt="Get in touch"
                    layout="responsive"
                  />
                </ContactImg>
              )}
            </Col>
            <Col width={{ _: 1, lg: "8.333333%" }}></Col>
            <Col width={{ _: 1, lg: "66.666667%" }}>
              {howCanWeHelp && (
                <Info>
                  <h2>How Can We Help?</h2>
                  <Article>{documentToReactComponents(howCanWeHelp)}</Article>
                </Info>
              )}
              <Form>
                {form !== undefined &&
                  (success !== true ? (
                    <Form>
                      <FormiumForm
                        data={form}
                        components={components}
                        onSubmit={async (values) => {
                          await formium.submitForm("how-can-we-help", values);
                          setSuccess(true);
                        }}
                      />
                    </Form>
                  ) : (
                    <Thx>Thank you! The message has been sent.</Thx>
                  ))}
              </Form>
            </Col>
          </Row>
          {mapCode && <Map dangerouslySetInnerHTML={{ __html: mapCode }} />}
        </SinglePost>
      </Wrapper>
    </Section>
  );
};
