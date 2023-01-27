import Link from "next/link";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Layout from "../layout/layout";
import Button from "../../components/Button";
import { useFormik } from "formik";
import { signup_validate } from "../../lib/validate";
import axios from "axios";
import { useRouter } from "next/router";

const FormStyled = styled.form`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: all;
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
    margin-top: 2rem;
    font-style: 0.9rem;
    width: 100%;
    text-align: center;
    & a {
      color: rgb(var(--primary-color));
    }
  }
`;

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { name: "", email: "", password: "" };
  const onSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("hello world");
    console.log(values);
    axios
      .post("/api/auth/signup", values)
      .then(() => router.push("/dashboard"));
  };
  const formik = useFormik({
    initialValues: initialValues,
    validate: signup_validate,
    onSubmit,
  });
  return (
    <Layout>
      <FormStyled onSubmit={formik.handleSubmit}>
        <h1>Register</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            autoComplete="on"
            {...formik.getFieldProps("name")}
            className={`${
              formik.touched.name && formik.errors.name && "error"
            }`}
            required
          />
          {formik.touched.name && formik.errors.name && (
            <span className="errors">{formik.errors.name}</span>
          )}
        </div>
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
          {formik.values.password != "" && (
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
            e.preventDefault();
            await axios
              .post("/api/auth/signup", formik.values)
              .then(() => router.push("/dashboard"));
          }}
        >
          <Button type="submit" bgColor="--primary-color">
            Register
          </Button>
        </span>
        <div className="ifExist">
          <p>
            Don&apos;t have an account? <Link href="/auth/signin">Sign in</Link>
          </p>
        </div>
      </FormStyled>
    </Layout>
  );
};

export default Register;
