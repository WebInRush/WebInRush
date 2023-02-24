import styled from "styled-components";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const FooterElement = styled.footer`
  background-color: rgb(var(--secondary-color), 0.25);
  margin-block: 3rem 5rem;
  padding: 3rem;
  border-radius: 2rem;
  text-align: center;
  transition: 0.15s;
  box-shadow: 0 0 1rem rgb(var(--dark-color));
  & .row {
    margin-bottom: 2rem;
    display: flex;
    gap: 5rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
      gap: 2rem;
    }
    & .col {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;
      @media screen and (max-width: 50rem) {
        text-align: center;
      }
      & .col-header {
        display: flex;
        flex-direction: column;
        & h2 {
          font-size: 1.5rem;
          color: rgb(var(--primary-color));
          text-transform: uppercase;
        }
        & span {
          font-size: 1rem;
          color: rgb(var(--primary-color), 0.8);
          font-weight: 300;
        }
      }
      @media screen and (max-width: 50rem) {
        &.social .col-body {
          & ul {
            align-items: center;
          }
        }
      }
      & .col-body {
        & ul {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          & li {
            font-size: 0.9rem;
            color: rgb(var(--light-color), 0.5);
            transition: 0.15s;
            white-space: nowrap;
            font-weight: 500;
            &:hover {
              color: rgb(var(--primary-color));
            }
          }
          &.description li {
            white-space: normal;
          }
        }
      }
      &.social li {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(var(--white-color), 0.5);
          width: 0;
          height: 0.1rem;
          border-radius: 5rem;
          transition: 0.15s;
        }
        &:hover::before {
          width: 100%;
        }
      }
    }
  }
  & .credits {
    font-size: 1rem;
    color: rgb(var(--light-color), 0.5);
    letter-spacing: 0.05rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
    & .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      @media screen and (max-width: 50rem) {
        flex-direction: column;
      }
      & .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.15rem;
        & a {
          display: flex;
          justify-content: center;
          align-items: center;
          & svg {
            transition: 0.15s;
            &:hover {
              color: rgb(var(--primary-color), 0.8);
            }
          }
        }
      }
      & .others {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: 0.15s;
        @media screen and (max-width: 50rem) {
          flex-direction: column;
          margin-block: 1rem;
        }
        & a:hover {
          color: rgb(var(--primary-color));
        }
        & a {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(var(--white-color), 0.5);
            width: 0;
            height: 0.1rem;
            border-radius: 5rem;
            transition: 0.15s;
          }
          &:hover::before {
            width: 100%;
          }
        }
      }
    }
    & .right {
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  const [logo, setLogo] = useState("WebInRush");
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
    <FooterElement className="container">
      <div>
        <div className="row">
          <div className="col">
            <div className="col-header">
              <h2 onMouseOver={mouseOver}>{logo}</h2>
              <span>
                Get a turbocharged rush with WebInRush&apos;s web solutions
              </span>
            </div>
            <div className="col-body">
              <ul className="description">
                <li>
                  Designed and built with all the love in the world by the
                  WebInRush team using Next.js.
                </li>
                <li>Code licensed GNU General Public License v3.0.</li>
              </ul>
            </div>
          </div>
          <div className="col social">
            <div className="col-header">
              <h2>Social</h2>
            </div>
            <div className="col-body">
              <ul>
                <li>
                  <a
                    href="http://linkedin.com/in/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/ItsmeSubid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="http://github.com/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/itsme_subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@itsme-Subid/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="credits">
          <div className="left">
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/itsme-subid"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://twitter.com/ItsmeSubid"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <BsTwitter />
              </a>
              <a
                href="https://github.com/itsme-subid"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <BsGithub />
              </a>
              <a
                href="http://instagram.com/itsme_subid"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.youtube.com/@itsme-Subid/"
                target="_blank"
                rel="noopener noreferrer"
                title="Youtube"
              >
                <BsYoutube />
              </a>
            </div>
            <div className="others">
              <Link href="/termsofservice">Terms of Service</Link>
              <Link href="/privacypolicy">Privacy Policy</Link>
              <Link href="/refundpolicy">Refund Policy</Link>
            </div>
          </div>
          <div className="right">© 2022 WebInRush, Inc.</div>
        </div>
      </div>
    </FooterElement>
  );
};

export default Footer;
