import styled from "styled-components";
import bg from "../assets/galaxy.jpg";
import { Link } from "react-router-dom";

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
  & span:nth-child(1) {
    margin-bottom: -1.5rem;
    background-image: url(${bg});
    background-clip: text;
    background-position: top;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5rem;
    font-weight: bolder;
  }
  & span:nth-child(2) {
    color: rgb(var(--light-color));
    font-size: 1.5rem;
    font-weight: bolder;
  }
  & span:nth-child(3) {
    color: rgb(var(--light-color), 0.375);
    font-size: 1rem;
    font-weight: bolder;
  }
  & button {
    padding: 1rem 2rem;
    border: none;
    background-color: rgb(var(--primary-color));
    color: rgb(var(--light-color));
    border-radius: 2.25rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyled>
      <span>404</span>
      <span>Page Not Found</span>
      <span>The page you're looking for does not seem to exist</span>
      <button>
        <Link to="/">Back Home</Link>
      </button>
    </NotFoundStyled>
  );
};

export default NotFound;
