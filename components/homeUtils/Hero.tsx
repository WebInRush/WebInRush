import styled from "styled-components";
import bg from "../../public/images/background.webp";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const HomeStyled = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 100vh;
  & .content {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(90%, 70rem);
    gap: 1rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column-reverse;
    }
    & span#panel {
      & h1 {
        @media screen and (max-width: 50rem) {
          font-size: 1.5rem;
          text-align: center;
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
        @media screen and (max-width: 50rem) {
          justify-content: center;
        }
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
    & span#image {
      display: grid;
      place-items: center;
      & img {
        max-width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
        border: 2px solid rgb(var(--secondary-color), 0.75);
        border-radius: 50%;
        object-fit: cover;
      }
    }
  }
`;

const Hero = () => {
  useEffect(() => {
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
  }, []);

  return (
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
        <span id="image">
          <Image src={bg.src} width={500} height={500} alt="" />
        </span>
      </div>
    </HomeStyled>
  );
};

export default Hero;
