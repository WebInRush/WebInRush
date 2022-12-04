import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 240, 246, 252;
  --dark-color: 13, 17, 23;
  --primary-color: 239, 125, 1;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  outline: none;
}
body {
  background-color: rgb(var(--dark-color));
  color: rgb(var(--light-color));
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: all 0.15s ease;
}
.container {
  margin-inline: auto;
  width: min(90%, 70rem);
}
.App {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
.light {
  background-color: rgb(var(--light-color));
  color: rgb(var(--dark-color));
}
::-webkit-scrollbar {
  width: 0.25em;
}
::-webkit-scrollbar-track {
  margin-block: 0.45em;
  transition: all 0.15s ease;
}
::-webkit-scrollbar-track:hover {
  background: rgba(var(--dark-color), 0.1);
}
::-webkit-scrollbar-thumb {
  background: rgba(var(--light-color), 0.5);
  border-radius: 0.5rem;
}
.light ::-webkit-scrollbar-thumb {
  background: rgb(var(--dark-color), 0.5);
}
.light ::selection {
  color: rgb(var(--light-color));
  background: rgb(var(--primary-color));
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.15s;
}
a:hover{
  text-decoration: underline;
}`;

const spinnerAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const ScrollLoading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  z-index: 1;
  background-color: rgb(var(--dark-color));
  & span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border-top: 4px solid rgba(var(--primary-color), 1);
    border-left: 4px solid rgba(var(--primary-color), 1);
    border-right: 4px solid rgba(var(--primary-color), 0);
    animation: ${spinnerAnimation} 0.6s linear infinite;
  }
`;

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Suspense
        fallback={
          <ScrollLoading>
            <span></span>
          </ScrollLoading>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;