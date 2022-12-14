import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ChatBox = lazy(() => import("./components/ChatBox"));
const Footer = lazy(() => import("./components/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Register = lazy(() => import("./pages/Register"));
const Signin = lazy(() => import("./pages/Signin"));
const Navbar = lazy(() => import("./components/Navbar"));

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 240, 246, 252;
  --dark-color: 0, 0, 0;
  --primary-color: 239, 125, 1;
  --primary-gradient-1: 253, 167, 76;
  --secondary-color: 31, 111, 235;
  --secondary-gradient-1: 109, 166, 253;
  --white-color: 255, 255, 255;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui;
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
::-webkit-scrollbar {
  width: 0.25em;
}
::-webkit-scrollbar-track {
  background: transparent;
  transition: all 0.15s ease;
}
::-webkit-scrollbar-track:hover {
  background: rgba(var(--dark-color), 0.01);
}
::-webkit-scrollbar-thumb {
  background: rgba(var(--light-color), 0.25);
  border-radius: 0.5rem;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.15s;
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

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <ScrollLoading>
              <span></span>
            </ScrollLoading>
          }
        >
          <Navbar />
          <ChatBox />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default App;
