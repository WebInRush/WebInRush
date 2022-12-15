import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../assets/background.webp";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: rgb(var(--primary-color));
  color: rgb(var(--dark-color));
  border-radius: 2.25rem;
  font-size: 1rem;
  font-weight: 500;
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: 0.15s;
  &:hover {
    filter: drop-shadow(0 0 0.75rem rgb(var(--primary-color), 0.5));
    padding: 1rem 2.5rem;
  }
`;

const HomeStyled = styled.div`
  position: relative;
  top: -5rem;
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgb(var(--dark-color)),
      transparent
    ),
    url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    & h1 span {
      &.blue-text {
        background: linear-gradient(
          200deg,
          rgb(var(--secondary-color)) 30%,
          rgb(var(--secondary-gradient-1)) 60%,
          rgb(var(--white-color), 0.5)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: larger;
      }
      &.orange-text {
        background: linear-gradient(
          15deg,
          rgb(var(--primary-color)) 30%,
          rgb(var(--primary-gradient-1)) 60%,
          rgb(var(--white-color), 0.5)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: larger;
      }
    }
  }
`;

const Category = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h2 {
    color: rgb(var(--white-color));
    font-size: 3rem;
    letter-spacing: -0.1rem;
    text-align: center;
    font-weight: 700;
  }
  & .categories {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 2rem 0;
    @media screen and (max-width: 60rem) {
      grid-template-columns: repeat(2, 1fr);
      .business {
        grid-column: 1 / 3;
      }
    }
    @media screen and (max-width: 35rem) {
      grid-template-columns: repeat(1, 1fr);
    }
    & .card {
      width: 100%;
      position: relative;
      min-height: 20rem;
      border: 1px solid rgba(var(--white-color), 0.15);
      border-radius: 1rem;
      overflow: hidden;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & h3 {
        color: rgb(var(--white-color));
        font-size: 1.5rem;
        font-weight: 700;
      }
      & p {
        color: rgb(var(--white-color), 0.5);
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        & li {
          color: rgb(var(--white-color), 0.5);
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          & svg {
            font-size: 1.5rem;
            color: rgb(var(--white-color));
          }
        }
      }
      & button {
        padding: 0.5rem 1rem;
        border: none;
        background-color: rgb(var(--white-color));
        color: rgb(var(--dark-color));
        border-radius: 2.25rem;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        transition: 0.15s;
        &:hover {
          filter: drop-shadow(0 0 0.5rem rgb(var(--white-color), 0.5));
          padding: 0.5rem 1.5rem;
        }
      }
      & .attr{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem 1rem;
        background-color: rgb(var(--primary-color));
        color: rgb(var(--white-color));
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-radius: 0 0 0 1rem;

      }
    }
  }
`;

const Home = () => {
  return (
    <>
      <HomeStyled>
        <div className="content container">
          <h1>
            Build your <span className="blue-text">Next-Gen</span>
            <br />
            <span className="orange-text">Website</span> with us.
          </h1>
          <Button>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </HomeStyled>
      <Category className="container">
        <h2>Find a plan to power your projects</h2>
        <div className="categories">
          <div className="students card">
            <h3>Students</h3>
            <p>For students who want to build their own website or project.</p>
            <ul>
              <li>
                <IoIosCheckmarkCircle /> HTML/CSS
              </li>
              <li>
                <IoIosCheckmarkCircle /> JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> React JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> Node JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> MongoDB / SQL
              </li>
              <li>
                <IoIosCheckmarkCircle /> Express JS
              </li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="portfolio card">
            <div className="attr">
              <span>Most Popular</span>
            </div>
            <h3>Portfolio</h3>
            <p>
              For people who want to build their own website and showcase their
              work to the world.
            </p>
            <ul>
              <li>
                <IoIosCheckmarkCircle /> HTML/CSS
              </li>
              <li>
                <IoIosCheckmarkCircle /> JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> React JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> Node JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> MongoDB / SQL
              </li>
              <li>
                <IoIosCheckmarkCircle /> Express JS
              </li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="business card">
            <h3>Business</h3>
            <p>
              For people who want to build their own business website and sell
              or promote their products.
            </p>
            <ul>
              <li>
                <IoIosCheckmarkCircle /> HTML/CSS
              </li>
              <li>
                <IoIosCheckmarkCircle /> JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> React JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> Node JS
              </li>
              <li>
                <IoIosCheckmarkCircle /> MongoDB / SQL
              </li>
              <li>
                <IoIosCheckmarkCircle /> Express JS
              </li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </Category>
    </>
  );
};

export default Home;
