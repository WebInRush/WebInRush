import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  transparent?: boolean;
};

const Nav = styled.nav<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  transition: 0.15s;
  background-image: linear-gradient(
    to bottom,
    rgb(var(--dark-color), 0.5),
    transparent
  );
  ${(props) =>
    props.transparent &&
    css`
      background-color: rgb(var(--dark-color));
    `};
  color: rgb(var(--light-color), 0.75);
  & h1 {
    font-size: 1.75rem;
    &:hover {
      filter: drop-shadow(0 0 0.75rem rgb(var(--primary-color), 0.25));
      color: rgb(var(--primary-color), 0.9);
    }
  }
  & a:hover {
    text-decoration: none;
  }
  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 1rem;
    font-weight: 500;
    & li {
      transition: 0.15s;
      cursor: pointer;
      &:hover {
        filter: drop-shadow(0 0 0.75rem rgb(var(--primary-color)));
        color: rgb(var(--primary-color), 0.9);
      }
      &.special {
        padding: 0.5rem 1.25rem;
        border-radius: 2rem;
        color: rgb(var(--white-color), 0.9);
        background: rgb(var(--secondary-color));
        &:hover {
          filter: drop-shadow(0 0 0.5rem rgb(var(--secondary-color), 0.5));
          color: rgb(var(--white-color));
        }
      }
    }
  }
`;

const PsuedoElement = styled.div`
  height: 5rem;
`;

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
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
    <div>
      <Nav transparent={scroll}>
        <h1>
          <Link href="/">{navbar.logo}</Link>
        </h1>
        <ul>
          {navbar.links.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          {!session ? (
            <>
              <li>
                <Link href="/auth/signin">Sign In</Link>
              </li>
              <li className="special">
                <Link href="/auth/register">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </li>
              <li className="special">
                <Link href="/dashboard">Dasboard</Link>
              </li>
            </>
          )}
        </ul>
      </Nav>
      <PsuedoElement></PsuedoElement>
    </div>
  );
};

export default Navbar;
