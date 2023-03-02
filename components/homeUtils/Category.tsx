import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import styled from "styled-components";

const CategoryStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
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
      .premium {
        grid-column: 1 / 3;
      }
    }
    @media screen and (max-width: 40rem) {
      grid-template-columns: 1fr;
      .premium {
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

const Category = () => {
  let skills = [
    "HTML",
    "Tailwind CSS / Bootstrap / Styled Components",
    "TS / JS",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB / SQL",
  ];
  return (
    <CategoryStyle className="container">
      <h2>Find a plan to power your projects</h2>
      <div className="categories">
        <div className="Basic card">
          <h3>Basic</h3>
          <p>For Basic who want to build their own website or project.</p>
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
          <h3>Advanced</h3>
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
        <div className="premium card">
          <h3>Premium</h3>
          <p>
            For people who want to build their own business website and sell or
            promote their products.
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
    </CategoryStyle>
  );
};

export default Category;
