import { Link } from "react-router-dom";
import styled from "styled-components";
import thumbnail from "../assets/background.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

type Props = {
  bgColor?: string;
  textColor?: string;
};

const Button = styled.button<Props>`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: rgb(var(${(props) => props.bgColor}));
  color: rgb(var(${(props) => props.textColor}));
  border-radius: 2.25rem;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.15s;
  &:hover {
    filter: drop-shadow(0 0 0.75rem rgb(var(${(props) => props.bgColor}), 0.5));
    padding: 0.5rem 2.5rem;
  }
`;

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  @media screen and (min-width: 50rem) {
    min-height: 70vh;
  }
  & > div {
    margin-inline: auto;
    width: clamp(100%, 80%, 80rem);
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(var(--light-color), 0.1);
    border-radius: 1rem;
    overflow: hidden;
    grid-template-columns: 1fr;
    @media screen and (min-width: 50rem) {
      display: grid;
      place-content: center;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: "a" "b";
    }
  }
`;

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
    position: relative;
    width: 100%;
    padding: 0.5rem 0.25rem;
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
`;

const Thumbnail = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: no-repeat center center/cover;
  background-image: linear-gradient(
      -45deg,
      rgb(var(--dark-color), 0.375),
      rgb(var(--dark-color), 0.8)
    ),
    url(${thumbnail});
  & > h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin: 0 auto 1rem 0;
  }
  & .ifExist {
    margin-top: 1rem;
  }
`;

const Register = () => {
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      login(inputs);
      // navigate("/");
    } catch (err) {
      type Exception = {
        response: {
          data: string;
        };
      };
      console.log((err as Exception)?.response?.data);
    }
  };
  return (
    <RegisterContainer className="container">
      <div>
        <Thumbnail>
          <h1>WebInRush.</h1>
          <div className="description">
            <p>
              WebInRush is an organization that makes websites for you.
              WebInRush is an organization that specializes in creating
              high-quality, user-friendly websites for its clients. Whether you
              need a simple website or a complex eCommerce store, we can help.
              Our team has years of experience building beautiful and functional
              websites for both individuals and businesses.
            </p>
          </div>
          <div className="ifExist">
            <p>Already have an account?</p>
            <Button bgColor="--light-color" textColor="--primary-color">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </Thumbnail>
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
          </div>
          <Button type="submit" bgColor="--primary-color">
            Sign in
          </Button>
        </FormStyled>
      </div>
    </RegisterContainer>
  );
};

export default Register;
