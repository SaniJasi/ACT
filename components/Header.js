import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { mq } from "../src/utils/utils";
import { Wrapper } from "./Wrap";
import { Navigation } from "./Navigation";
import { IconMenu } from "../src/svg/IconMenu";
import { IconAccount } from "../src/svg/IconAccount";

const SiteHeader = styled.header`
  background-color: ${(props) => props.theme.colors.blue};

  ${mq.mdDown`
    padding: 20px 0;
  `}
`;

const SiteHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 180px;

  ${mq.smUp`
    max-width: inherit;
  `}
`;

const SiteHeaderIcons = styled.div`
  display: flex;
  align-items: center;
`;

const OpenMenu = styled.a`
  margin-right: 20px;
  display: flex;

  ${mq.mdUp`
    display: none;
  `}

  svg {
    fill: ${(props) => props.theme.colors.white};
  }
`;

const Account = styled.a`
  display: flex;
  align-items: center;

  path {
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const Header = () => {
  const openMobMenu = () => {
    document.body.classList.toggle("mm-visible");
  };
  return (
    <SiteHeader>
      <Wrapper>
        <SiteHeaderRow>
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
          <Navigation />
          <SiteHeaderIcons>
            <OpenMenu onClick={openMobMenu}>
              <IconMenu />
            </OpenMenu>
            <Account
              href="https://platform.anticounterfeittechnologies.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconAccount />
            </Account>
          </SiteHeaderIcons>
        </SiteHeaderRow>
      </Wrapper>
    </SiteHeader>
  );
};
