import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";

type NavbarType = {
  transparent?: boolean;
};

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
    text-transform: uppercase;
    transition: 0.15s;
    cursor: pointer;
    &:hover {
      color: rgba(var(--primary-color));
    }
  }
  & .menu {
    gap: 1rem;
    & ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      & li {
        list-style: none;
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize;
        white-space: nowrap;
        position: relative;
        cursor: pointer;
        transition: 0.15s;
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
        }
        &.special:hover::before {
          width: 0;
        }
      }
    }
  }
`;

const StyledNavbar = styled.div<NavbarType>`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.15s;
  @media screen and (max-width: 50rem) {
    display: none;
  }
  ${(props) =>
    props.transparent &&
    css`
      background: rgb(var(--dark-color), 0.5);
      @media screen and (max-width: 50rem) {
        background: transparent;
      }
    `};
`;

const MobileNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transition: 0.15s;
  transform: translateY(-100%);
  opacity: 0;
  scale: 0;
  font-size: 1.5rem;
  padding-block: 0.5rem;
  border-top: 1px solid rgba(var(--white-color), 0.25);
  border-radius: 1.5rem 1.5rem 0 0;
  color: rgba(var(--white-color));
  background: rgb(var(--dark-color));
  transition: 0.15s;
  @media screen and (max-width: 50rem) {
    transform: translateY(0);
    opacity: 1;
    scale: 1;
  }
  & .tab-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem 0;
    & li {
      position: relative;
      display: grid;
      place-content: center;
      height: 1.5rem;
      list-style: none;
      font-size: 1.5rem;
      transition: color 0.15s;
      &:hover {
        color: rgb(var(--primary-color));
      }
      & a {
        display: grid;
        place-items: center;
        & span {
          display: grid;
          place-items: center;
          width: 100%;
          text-align: center;
          transition: 0.15s;
          &.text {
            position: absolute;
            display: flex;
            width: fit-content;
            text-align: center;
            bottom: -0.5rem;
            left: 50%;
            right: 0;
            font-size: 0.75rem;
            white-space: nowrap;
            opacity: 0;
            transform: translate(-50%, -1rem);
          }
        }
      }
      &.active {
        color: rgb(var(--primary-color));
        & span.icon {
          transform: translate(0, -0.75rem);
        }
        & span.text {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
    }
  }
`;

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [logo, setLogo] = useState("WebInRush");
  const { data: session } = useSession();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight * 0.1);
    });
  }, []);
  const navbar = {
    logo,
    links: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Products",
        path: "/products",
      },
      {
        name: "About",
        path: "/about",
      },
    ],
  };
  const mouseOver = (): void => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    let original = "WebInRush";
    const interval = setInterval(() => {
      setLogo((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return original[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };
  return (
    <>
      <StyledNavbar transparent={scroll}>
        <Navbar>
          <div className="logo">
            <Link href="/" onMouseOver={mouseOver}>
              {navbar.logo}
            </Link>
          </div>
          <div className="menu">
            <ul>
              {navbar.links.map(({ name, path }, index) => (
                <Link href={path} key={index}>
                  <li key={index}>{name}</li>
                </Link>
              ))}
              {!session ? (
                <Link href="/auth/signin">
                  <li className="special">Sign In</li>
                </Link>
              ) : (
                <>
                  <li
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </li>
                  <Link href="/chat">
                    <li className="special">Chat</li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </Navbar>
      </StyledNavbar>
      <MobileNavbar>
        <ul className="tab-bar">
          <li
            onClick={(e) => {
              Array.from(document.querySelectorAll(".tab-bar li")).map((item) =>
                item.classList.remove("active")
              );
              e.currentTarget.classList.toggle("active");
            }}
          >
            <Link href="/">
              <span className="icon">
                <AiFillHome />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li
            onClick={(e) => {
              Array.from(document.querySelectorAll(".tab-bar li")).map((item) =>
                item.classList.remove("active")
              );
              e.currentTarget.classList.toggle("active");
            }}
          >
            <Link href="/products">
              <span className="icon">
                <RiShoppingCartFill />
              </span>
              <span className="text">Products</span>
            </Link>
          </li>
          {!!session ? (
            <li
              onClick={(e) => {
                Array.from(document.querySelectorAll(".tab-bar li")).map(
                  (item) => item.classList.remove("active")
                );
                e.currentTarget.classList.toggle("active");
              }}
            >
              <Link href="/chat">
                <span className="icon">
                  <BsFillChatFill />
                </span>
                <span className="text">Chat</span>
              </Link>
            </li>
          ) : (
            <li
              onClick={(e) => {
                Array.from(document.querySelectorAll(".tab-bar li")).map(
                  (item) => item.classList.remove("active")
                );
                e.currentTarget.classList.toggle("active");
              }}
            >
              <Link href="/auth/signin">
                <span className="icon">
                  <FaUserAlt />
                </span>
                <span className="text">Sign in</span>
              </Link>
            </li>
          )}
          <li
            onClick={(e) => {
              Array.from(document.querySelectorAll(".tab-bar li")).map((item) =>
                item.classList.remove("active")
              );
              e.currentTarget.classList.toggle("active");
            }}
          >
            <Link href="/about">
              <span className="icon">
                <BsFillInfoCircleFill />
              </span>
              <span className="text">About</span>
            </Link>
          </li>
        </ul>
      </MobileNavbar>
    </>
  );
};

export default Header;
