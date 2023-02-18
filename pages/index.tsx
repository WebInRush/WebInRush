import styled from "styled-components";
import bg from "../public/images/background.webp";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Link from "next/link";

const HomeStyled = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 100vh;
  top: -3.5rem;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgb(var(--dark-color)),
      transparent
    ),
    url(${bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 50rem) {
    top: 0;
  }
  & .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    & h1 {
      @media screen and (max-width: 50rem) {
        font-size: 1.5rem;
      }
      & span {
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
    & a {
      display: flex;
      align-items: center;
      & button {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem 2rem;
        color: rgb(var(--white-color));
        background-color: rgb(var(--dark-color));
        border: 1px solid rgb(var(--light-color), 0.25);
        border-radius: 5rem;
        cursor: pointer;
        transition: color 0.15s;
        &::before {
          content: "";
          position: absolute;
          width: 150%;
          height: 300%;
          rotate: 45deg;
          transform: translateY(75%);
          background-color: rgb(var(--white-color));
          transition: all 0.5s;
        }
        &:hover {
          border: 1px solid transparent;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
            rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          color: rgb(var(--dark-color));
          &::before {
            transform: translateY(0);
          }
        }
        & > * {
          z-index: 1;
        }
      }
    }
  }
`;

const Category = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 50rem) {
    margin-block: 3.5rem;
  }
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
    @media screen and (max-width: 40rem) {
      grid-template-columns: 1fr;
      .business {
        grid-column: auto;
      }
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
      transition: 0.15s;
      gap: 1rem;
      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: rgb(var(--white-color), 0.25) 0 0.25rem 1rem;
      }
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
      & a {
        display: flex;
        align-items: center;
        width: 100%;
        & button {
          width: 100%;
          padding: 0.5rem 1rem;
          background-color: rgb(var(--white-color));
          color: rgb(var(--dark-color));
          border: 2px solid transparent;
          border-radius: 2.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          cursor: pointer;
          transition: 0.15s;
          &:hover {
            background-color: transparent;
            color: rgb(var(--white-color));
            border: 2px solid rgb(var(--white-color));
            box-shadow: rgb(var(--white-color), 0.25) 0 0.25rem 1rem;
            padding: 0.5rem 1.5rem;
          }
        }
      }
      & .attr {
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
  let skills = [
    "HTML",
    "Tailwind CSS / Bootstrap / Styled Components",
    "TS / JS",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB / SQL",
  ];
  if (typeof window !== "undefined") {
    const panel = document.querySelector("#panel") as HTMLElement;
    if (panel) {
      document.body.onpointermove = (event) => {
        const { clientX, clientY } = event;
        panel.style.transform = `translate(${clientX / 30}px, ${
          clientY / 30
        }px)`;
      };
    }
  }
  return (
    <>
      <HomeStyled>
        <div className="content container">
          <span id="panel">
            <h1>
              Build your <span className="blue-text">Next-Gen</span>
              <br />
              <span className="orange-text">Website</span> with us.
            </h1>
            <Link href="/chat">
              <button title="Chat with us">
                <span>Get Started</span>
              </button>
            </Link>
          </span>
        </div>
      </HomeStyled>
      <Category className="container">
        <h2>Find a plan to power your projects</h2>
        <div className="categories">
          <div className="students card">
            <h3>Students</h3>
            <p>For students who want to build their own website or project.</p>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  <IoIosCheckmarkCircle /> {skill}
                </li>
              ))}
            </ul>
            <Link href="/chat">
              <button title="Chat with us">Get Started</button>
            </Link>
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
              {skills.map((skill, index) => (
                <li key={index}>
                  <IoIosCheckmarkCircle /> {skill}
                </li>
              ))}
            </ul>
            <Link href="/chat">
              <button title="Chat with us">Get Started</button>
            </Link>
          </div>
          <div className="business card">
            <h3>Business</h3>
            <p>
              For people who want to build their own business website and sell
              or promote their products.
            </p>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  <IoIosCheckmarkCircle /> {skill}
                </li>
              ))}
            </ul>
            <Link href="/chat">
              <button title="Chat with us">Get Started</button>
            </Link>
          </div>
        </div>
      </Category>
    </>
  );
};

export default Home;
