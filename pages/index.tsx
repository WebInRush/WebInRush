import Category from "@/components/homeUtils/Category";
import Hero from "@/components/homeUtils/Hero";
import Plan from "@/components/homeUtils/Plan";
import styled from "styled-components";

const MainStyle = styled.div`
  display: grid;
  gap: 2rem;
  scroll-snap-type: y mandatory;
  & > * {
    scroll-snap-align: start;
  }
`;

const Home = () => {
  return (
    <MainStyle>
      <Hero />
      <Plan />
      <Category />
    </MainStyle>
  );
};

export default Home;
