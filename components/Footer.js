import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";

const SiteFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 60px 0;

  ${mq.smDown`
    text-align: center;
  `}

  ${mq.btwSmMd`
    padding: calc(60px + (90 - 60) * ((100vw - 320px) / (991 - 320))) 0 calc(30px + (50 - 30) * ((100vw - 320px) / (991 - 320)));
  `}

  ${mq.mdUp`
    padding: 90px 0 50px;
  `}
`;

const Logo = styled.a`
  margin: 0 0 40px;
  display: inline-flex;
  align-items: flex-start;
`;

const Nav = styled.nav`
  margin: 0 0 40px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    ${mq.smDown`
      justify-content: center;
    `}
  }

  li {
    ${mq.smDown`
      margin: 0 10px 10px;
    `}

    ${mq.btwMdXl`
      margin: 0 calc(20px + (45 - 20) * ((100vw - 768px) / (1599 - 768))) 0 0;
    `}

    ${mq.xlUp`
      margin: 0 45px 0 0;
    `}
  }

  a {
    line-height: 1.2;
    color: ${(props) => props.theme.colors.white};
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 0.7;
    }

    &.current-page {
      text-decoration: underline;
    }

    ${mq.xlDown`
      font-size: calc(14px + (22 - 14) * ((100vw - 320px) / (1599 - 320)));
    `}

    ${mq.xlUp`
      font-size: 22px;
    `}
  }
`;

const Copy = styled.div`
  line-height: 1.2;
  color: ${(props) => props.theme.colors.gray};

  ${mq.xlDown} {
    font-size: calc(14px + (22 - 14) * ((100vw - 320px) / (1599 - 320)));
  }

  ${mq.xlUp`
    font-size: 22px;
  `}
`;

export const Footer = () => {
  const menu = [
    {
      link: "contact",
      title: "Contact ACT",
    },
    {
      link: "privacy-policy",
      title: "Privacy Policy",
    },
    {
      link: "terms-of-use",
      title: "Terms of Use",
    },
    {
      link: "corporate-social-responsibility",
      title: "Corporate Social Responsibility",
    },
    {
      link: "voluntary-slavery-and-human-trafficking-statement",
      title: "Voluntary Slavery and Human Trafficking Statement",
    },
  ];
  return (
    <SiteFooter>
      <Wrapper>
        <Link href={"/"} passHref>
          <Logo>
            <Image
              src={"/site-logo.svg"}
              alt="Site logo"
              layout="fixed"
              width={243}
              height={43}
              priority
              quality={100}
            />
          </Logo>
        </Link>
        <Nav>
          <ul>
            {menu.map(({ link, title }) => (
              <li key={link}>
                <Link href={link}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Nav>
        <Copy>
          &copy; Anti Counterfeit Technologies {new Date().getFullYear()}
        </Copy>
      </Wrapper>
    </SiteFooter>
  );
};
