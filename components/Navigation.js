import { useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { mq } from "../src/utils/utils";
import { IconClose } from "../src/svg/IconClose";
import { IconChevron } from "../src/svg/IconChevron";

const Nav = styled.nav`
  ${mq.mdDown`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    width: 100%;
    transform: translate3d(100%, 0, 0);
    transition: transform .4s ease-out;
    z-index: 999;
    padding: 30px;
    background-color: ${(props) => props.theme.colors.blue};

    .mm-visible & {
      transform: translate3d(0, 0, 0);
    }
  `}

  ${mq.mdUp`
    flex: 1;
    margin: 0 80px 0 70px;
  `}
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${mq.mdDown`
    > li {
      margin: 20px 0;
    }
  `}

  ${mq.mdUp`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  .has-dropdown {
    position: relative;

    ${mq.mdUp`
      &:hover {
        > a {
          color: ${(props) => props.theme.colors.blue100}
        }
  
        > ul {
          opacity: 1;
          visibility: visible;
        }
      }
    `}
  }
`;

const MenuLink = styled.a`
  font-weight: 600;
  line-height: 1;
  color: ${(props) => props.theme.colors.white};
  align-items: center;
  transition: color 0.2s ease-out;

  ${mq.mdDown`
    font-size: 30px;
    line-height: 1.2;
    display: inline-flex;
  `}

  ${mq.mdUp`
    height: 100px;
    display: flex;

    &.current-page {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        bottom: 14px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        background-color: $c-white;
      }
    }
  `}

  ${mq.btwMdXl`
    font-size: calc(14px + (22 - 14) * ((100vw - 992px) / (1599 - 992)));
  `}

  ${mq.xlUp`
    font-size: 22px;
  `}

  @media (hover: hover) {
    &:hover {
      color: ${(props) => props.theme.colors.blue100};
    }
  }
`;

const Dropdown = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.colors.blue100};
  z-index: 20;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-out;

  &.dropdown-latest {
    @media (min-width: 992px) and (max-width: 1400px) {
      left: auto;
      right: -35px;
    }
  }

  ${mq.mdDown`
    height: 0;
    overflow: hidden;

    .is-active & {
      opacity: 1;
      visibility: visible;
      height: auto;
      overflow: visible;
      margin-top: 15px;
      padding: 25px;
    }
  `}

  ${mq.mdUp`
    padding: 25px 35px;
    position: absolute;
    top: 100%;
    left: -35px;
    white-space: nowrap;
  `}

  li {
    margin: 0 0 20px;

    &:last-child {
      margin: 0;
    }
  }

  a {
    font-size: 20px;
    line-height: 1.2;
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.colors.white};
    padding-left: 20px;

    &::before,
    &::after {
      position: absolute;
      content: "";
    }

    &::before {
      background: url("./menu-icon.svg") no-repeat;
      top: 5px;
      left: 0;
      width: 8px;
      height: 14px;
    }

    &::after {
      height: 1px;
      bottom: 0;
      left: 20px;
      width: 0;
      transition: width 0.2s ease-out;
      background-color: ${(props) => props.theme.colors.white};
    }

    &:hover,
    &.current-page {
      &::after {
        width: calc(100% - 20px);
      }
    }
  }
`;

const CloseMenu = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq.mdUp`
    display: none;
  `}

  svg {
    fill: ${(props) => props.theme.colors.white};
    width: 20px;
    height: 20px;
  }
`;

const MobileDropDown = styled.a`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: -10px;
  z-index: 5;

  svg {
    fill: ${(props) => props.theme.colors.white};
    transition: transform 0.3s ease-out;
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
  }

  ${mq.mdDown`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  ${mq.mdUp`
    display: none;
  `}

  .is-active & {
    svg {
      transform: rotate(270deg);
    }
  }
`;

export const Navigation = () => {
  const refs = useRef([]);

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".has-dropdown");

    dropdowns[dropdowns.length - 1]
      .querySelector("ul")
      .classList.add("dropdown-latest");
  });

  const openMobileDropdown = (index) => {
    refs.current[index].closest("li").classList.toggle("is-active");
  };

  const closeMenu = () => {
    document.body.classList.remove("mm-visible");
  };

  const menuList = [
    {
      href: "personal",
      title: "Personal",
      dropdown: [
        {
          href: "fakebuster",
          title: "Fakebuster",
        },
        {
          href: "be-a-streer-detective",
          title: "Be a Street Detective",
        },
        {
          href: "protect-your-money",
          title: "Protect your money",
        },
      ],
    },
    {
      href: "business",
      title: "Business",
      dropdown: [
        {
          href: "our-approach",
          title: "Our Approach",
        },
        {
          href: "how-to-integrate",
          title: "How to Integrate",
        },
        {
          href: "template-development",
          title: "Template Development",
        },
      ],
    },
    {
      href: "partners",
      title: "Partners",
    },
    {
      href: "https://everyasset.com",
      title: "Every Asset",
      target: true,
      dropdown: [
        {
          href: "https://everyasset.org",
          title: "Template Schemas",
          target: true,
        },
      ],
    },
    {
      href: "#",
      title: "Corporate",
      dropdown: [
        {
          href: "about-anti-counterfeit-technologies",
          title: "About Anti Counterfeit Technologies",
        },
        {
          href: "news",
          title: "News",
        },
        {
          href: "investors",
          title: "Investors",
        },
      ],
    },
    {
      href: "contact",
      title: "Contact",
    },
  ];
  return (
    <Nav>
      <Menu>
        {menuList.map(({ href, title, dropdown, target }, index) => (
          <li key={href} className={dropdown ? "has-dropdown" : null}>
            {target === true ? (
              <MenuLink href={href} target="_blank" rel="noopener noreferrer">
                {title}
              </MenuLink>
            ) : (
              <Link href={`/${href}`} passHref>
                <MenuLink onClick={closeMenu}>{title}</MenuLink>
              </Link>
            )}

            {dropdown && (
              <>
                <MobileDropDown
                  ref={(element) => {
                    refs.current[index] = element;
                  }}
                  onClick={() => openMobileDropdown(index)}
                >
                  <IconChevron />
                </MobileDropDown>
                <Dropdown>
                  {dropdown.map(({ href, title, target }) => (
                    <li key={href}>
                      {target === true ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {title}
                        </a>
                      ) : (
                        <Link href={`/${href}`} passHref>
                          <a onClick={closeMenu}>{title}</a>
                        </Link>
                      )}
                    </li>
                  ))}
                </Dropdown>
              </>
            )}
          </li>
        ))}
      </Menu>
      <CloseMenu onClick={closeMenu}>
        <IconClose />
      </CloseMenu>
    </Nav>
  );
};
