import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FaHamburger } from "react-icons/fa";

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  width: 90%;
  margin-inline: auto;
  color: rgba(var(--light-color));
  & .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
    transition: 0.15s;
    cursor: pointer;
    &:hover {
      color: rgba(var(--primary-color));
    }
    @media screen and (max-width: 50rem) {
      display: none;
    }
  }
  & .menu {
    @media screen and (max-width: 50rem) {
      width: 100%;
    }
    gap: 1rem;
    & ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      @media screen and (max-width: 50rem) {
        flex-direction: column;
      }
      & li {
        list-style: none;
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize;
        transition: 0.15s;
        position: relative;
        cursor: pointer;
        &:hover {
          color: rgb(var(--primary-color));
        }
        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(var(--primary-color));
          width: 0;
          height: 0.1rem;
          border-radius: 5rem;
          transition: 0.15s;
        }
        &:hover::before {
          width: 100%;
        }
        @media screen and (max-width: 50rem) {
          font-size: 1.25rem;
          text-align: center;
          letter-spacing: 0.1rem;
          background: rgba(var(--dark-color), 0.5);
          backdrop-filter: blur(0.5rem);
          padding: 0.75rem 1rem;
          border-radius: 2rem;
          width: 100%;
        }
        &.special {
          background-color: rgb(var(--secondary-color));
          border-radius: 5rem;
          padding: 0.5rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          color: rgb(var(--white-color));
          font-size: 1rem;
          cursor: pointer;
          transition: 0.15s;
          &:hover {
            box-shadow: rgba(var(--secondary-color), 0.5) 0 0 0.5rem;
          }
          @media screen and (max-width: 50rem) {
            font-size: 1.25rem;
            text-align: center;
            letter-spacing: 0.1rem;
            background: rgba(var(--secondary-color));
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            width: 100%;
          }
        }
        &.special:hover::before {
          width: 0;
        }
      }
    }
  }
`;

type NavbarType = {
  menu?: boolean;
  transparent?: boolean;
};

const StyledNavbar = styled.div<NavbarType>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.15s;
  @media screen and (max-width: 50rem) {
    position: fixed;
    height: 100%;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  ${(props) =>
    props.transparent &&
    css`
      background: rgb(var(--dark-color), 0.5);
    `};
  ${(props) =>
    !props.menu
      ? css`
          @media screen and (max-width: 50rem) {
            transform: translateX(-100%);
          }
        `
      : css`
          @media screen and (max-width: 50rem) {
            backdrop-filter: blur(1rem);
            background: rgb(var(--dark-color), 0.5);
          }
        `}
`;

const MobileNavbar = styled.nav<NavbarType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  color: rgba(var(--white-color));
  backdrop-filter: blur(5px);
  transition: all 0.15s;
  transform: translateY(-100%);
  font-size: 1.5rem;
  padding-block: 0.5rem;
  @media screen and (max-width: 50rem) {
    transform: translateY(0);
  }
  ${(props) =>
    props.transparent &&
    css`
      background: rgb(var(--dark-color), 0.5);
    `};
`;

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const { data: session } = useSession();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight * 0.1);
    });
  }, []);
  const navbar = {
    logo: "WebInRush",
    links: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
    ],
  };
  return (
    <>
      <StyledNavbar menu={menu} transparent={scroll}>
        <Navbar>
          <div className="logo">
            <Link href="/">{navbar.logo}</Link>
          </div>
          <div className="menu">
            <ul>
              {navbar.links.map(({ name, path }, index) => (
                <li key={index} onClick={() => setMenu(false)}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
              {!session ? (
                <>
                  <li className="special" onClick={() => setMenu(false)}>
                    <Link href="/auth/signin">Sign In</Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => {
                      signOut();
                      setMenu(false);
                    }}
                  >
                    Logout
                  </li>
                  <li className="special" onClick={() => setMenu(false)}>
                    <Link href="/chat">Chat</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Navbar>
      </StyledNavbar>
      <MobileNavbar transparent={scroll}>
        <div className="content container">
          <FaHamburger onClick={() => setMenu(!menu)} />
        </div>
      </MobileNavbar>
    </>
  );
};

export default Header;
