import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Layout from "../layout/layout";
import Button from "../../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { useFormik } from "formik";
import { signin_validate } from "../../lib/validate";
import { useRouter } from "next/router";

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
    &.error {
      border-color: rgb(220, 38, 38);
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
    & span.errors {
      position: absolute;
      bottom: -1rem;
      left: 0;
      font-size: 0.75rem;
      color: rgb(220, 38, 38);
      display: inline-block;
      height: 2.25rem;
    }
  }
  & span.button {
    width: 100%;
  }
  @media screen and (max-width: 50rem) {
    & .button {
      margin-top: 1.25rem;
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

type MyFormValues = {
  email?: string;
  password?: string;
};

const Signin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: MyFormValues = { email: "", password: "" };
  const onSubmit = async (values: { email?: string; password?: string }) => {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/dashboard",
    });
    if (status?.ok) router.push("/dashboard");
  };
  const formik = useFormik({
    initialValues: initialValues,
    validate: signin_validate,
    onSubmit,
  });
  // google handler function
  async function handleGoogleLogin() {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  }
  // github handler function
  async function handleGithubLogin() {
    signIn("github", {
      callbackUrl: "/dashboard",
    });
  }
  return (
    <Layout>
      <FormStyled onSubmit={formik.handleSubmit}>
        <h1>Sign in</h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            autoComplete="on"
            {...formik.getFieldProps("email")}
            className={`${
              formik.touched.email && formik.errors.email && "error"
            }`}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <span className="errors">{formik.errors.email}</span>
          )}
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="on"
            {...formik.getFieldProps("password")}
            className={`${
              formik.touched.password && formik.errors.password && "error"
            }`}
            required
          />
          {formik.values.password !== "" && (
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
          {formik.touched.password && formik.errors.password && (
            <span className="errors">{formik.errors.password}</span>
          )}
        </div>
        <span
          className="button"
          onClick={async (e) => {
            const status = await signIn("credentials", {
              redirect: false,
              email: formik.values.email,
              password: formik.values.password,
              callbackUrl: "/dashboard",
            });
            if (status?.ok) router.push("/dashboard");
          }}
        >
          <Button type="submit" bgColor="--primary-color">
            Sign in
          </Button>
        </span>
        <div className="otherLogin">
          <FcGoogle size={35} onClick={() => handleGoogleLogin()} />
          <ImGithub size={35} onClick={() => handleGithubLogin()} />
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
