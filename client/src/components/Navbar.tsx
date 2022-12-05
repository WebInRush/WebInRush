import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(var(--dark-color));
  color: rgb(var(--light-color), 0.75);
  & h1{
    font-size: 1.75rem;
    &:hover {
    filter: drop-shadow(0 0 0.75rem rgb(var(--primary-color)));
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
      &:hover {
        filter: drop-shadow(0 0 0.75rem rgb(var(--primary-color)));
      }
      & a {
        transition: 0.15s;
        &:hover {
          text-decoration: none;
          color: rgb(var(--primary-color), 0.9);
        }
      }
    }
  }
`;

const Navbar = () => {
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
    <Nav>
      <h1>
        <Link to="/">{navbar.logo}</Link>
      </h1>
      <ul>
        {navbar?.links?.map((link) => (
          <li key={link.name}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
        {!localStorage.getItem("authToken") ? (
          <>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/dasboard">DASHBOARD</Link>
            </li>
          </>
        )}
      </ul>
    </Nav>
  );
};

export default Navbar;
