import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeStyled = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgb(var(--dark-color)),
      transparent
    ),
    url(/background.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    h1 span {
      color: rgb(var(--primary-color), 0.9);
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: rgb(var(--primary-color));
  color: rgb(var(--light-color));
  border-radius: 2.25rem;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.15s;
  &:hover {
    filter: drop-shadow(0 0 0.75rem rgb(var(--primary-color), 0.5));
    padding: 1rem 2.5rem;
  }
  & a:hover {
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <div className="content container">
        <h1>
          Build your <span>Website</span>
          <br />
          With us.
        </h1>
        <Button>
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </HomeStyled>
  );
};

export default Home;
