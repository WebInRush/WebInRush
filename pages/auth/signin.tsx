import styled from "styled-components";
import Layout from "../../layout/layout";
import { signIn } from "next-auth/react";
import google from "../../public/images/google.webp";
import github from "../../public/images/github.webp";
import meta from "../../public/images/meta.webp";
import Image from "next/image";

const SigninStyled = styled.div`
  padding: 3rem;
  display: grid;
  place-items: center;
  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 2rem;
    & li {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 3rem;
      border: 1px solid rgb(var(--light-color), 0.5);
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.15s;
      &::before {
        content: "";
        position: absolute;
        width: 150%;
        height: 150%;
        transform: translateY(150%);
        background-color: rgb(var(--dark-color));
        border-radius: 50%;
        transition: all 0.5s;
      }
      &:hover {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        &::before {
          transform: translateY(0);
        }
      }
      & > * {
        z-index: 1;
      }
    }
  }
`;

const Signin = () => {
  // google handler function
  async function handleGoogleLogin() {
    signIn("google", {
      callbackUrl: "/chat",
    });
  }
  // github handler function
  async function handleGithubLogin() {
    signIn("github", {
      callbackUrl: "/chat",
    });
  }
  // linkedin handler function
  async function handleLinkedinLogin() {
    signIn("linkedin", {
      callbackUrl: "/chat",
    });
  }
  const login = [
    {
      label: "google",
      function: handleGoogleLogin,
      image: google.src,
      width: 60,
      height: 60,
    },
    {
      label: "github",
      function: handleGithubLogin,
      image: github.src,
      width: 60,
      height: 60,
    },
    {
      label: "meta",
      function: handleLinkedinLogin,
      image: meta.src,
      width: 107,
      height: 60,
    },
  ];
  console.log(meta.height, meta.width);
  return (
    <Layout>
      <SigninStyled>
        <ul>
          {login.map((item, index) => (
            <li key={index} onClick={() => item.function()}>
              <Image
                src={item.image}
                alt={item.label}
                height={item.height}
                width={item.width}
              />
              <span>
                Sign in with <span>{item.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </SigninStyled>
    </Layout>
  );
};

export default Signin;
