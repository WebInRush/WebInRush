import styled from "styled-components";
import Layout from "../../layout/layout";
import { getSession, signIn } from "next-auth/react";
import google from "../../public/images/google.webp";
import github from "../../public/images/github.webp";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";

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
        z-index: 0;
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
      &:active {
        border: 1px solid rgb(var(--light-color), 0.5);
      }
      & img {
        @media screen and (max-width: 50rem) {
          width: 3rem;
          height: 3rem;
        }
      }
      & span.authenticator {
        text-transform: capitalize;
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
  ];
  return (
    <Layout>
      <SigninStyled>
        <Head>
          <title>Sign in | WebInRush 🚀</title>
        </Head>
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
                Sign in with <span className="authenticator">{item.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </SigninStyled>
    </Layout>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !!session
    ? { redirect: { destination: "/chat", permanent: false } }
    : { props: { session } };
};
