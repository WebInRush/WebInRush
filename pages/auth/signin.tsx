import { useRouter } from "next/router";
import styled from "styled-components";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { AxiosError } from "axios";
import Link from "next/link";
import Layout from "../layout/layout";
import Button from "../../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";

const FormStyled = styled.form`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  & > h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  & input {
    width: 100%;
    padding: 0.5rem 0;
    margin: 1.5rem 0;
    border: none;
    border-bottom: 0.15rem solid rgb(var(--light-color), 0.5);
    border-radius: 0.1rem;
    outline: none;
    background: transparent;
    font-size: 1rem;
    color: rgb(var(--light-color));
    transition: 0.15s;
    &:focus {
      border-bottom-color: rgb(var(--primary-color), 0.5);
    }
  }
  & > div {
    position: relative;
    width: 100%;
    & > span {
      user-select: none;
      font-size: 1.25rem;
      & > svg {
        position: absolute;
        right: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: 0.15s;
        &.hidden {
          opacity: 0;
          visibility: hidden;
        }
      }
    }
  }
  & .ifExist {
    font-style: 0.9rem;
    width: 100%;
    text-align: center;
    & a {
      color: rgb(var(--primary-color));
    }
  }
  & .otherLogin {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;
    & svg {
      cursor: pointer;
    }
  }
`;

const Signin = () => {
  const navigate = useRouter();
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(inputs)
      .then(() => navigate.push("/"))
      .catch((err) =>
        setError(
          ((err as AxiosError)?.response?.data as string) ||
            (err as AxiosError)?.message
        )
      );
  };

  // google handler function
  async function handleGoogleLogin() {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  }
  return (
    <Layout>
      <FormStyled onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="on"
            name="password"
            onChange={handleChange}
            required
          />
          {inputs.password != "" && (
            <span>
              <FaEye
                className={showPassword ? "hidden" : ""}
                onClick={() => setShowPassword((prev) => !prev)}
              />
              <FaEyeSlash
                className={!showPassword ? "hidden" : ""}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </span>
          )}
        </div>
        <p style={{ color: "red" }}>
          {error != "" &&
            (() => {
              setTimeout(() => {
                setError("");
              }, 5000);
              return error;
            })()}
        </p>
        <Button type="submit" bgColor="--primary-color">
          Sign in
        </Button>
        <div className="otherLogin">
          <FcGoogle onClick={() => handleGoogleLogin()} size={35} />
          <ImGithub size={35} />
          <BsFacebook size={35} />
        </div>
        <div className="ifExist">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register">Sign Up</Link>
          </p>
        </div>
      </FormStyled>
    </Layout>
  );
};

export default Signin;
