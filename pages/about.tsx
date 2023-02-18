import Head from "next/head";
import styled, { keyframes } from "styled-components";

const animateBefore = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100vh);
    }
`;
const animateAfter = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100vh);
    }
`;

const About = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  margin-block: 2rem;
  &::before {
    content: "";
    position: absolute;
    top: -20rem;
    left: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgba(255, 183, 3, 0.175),
      transparent,
      transparent
    );
    animation: ${animateBefore} 15s infinite;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20rem;
    right: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgb(33, 158, 188, 0.175),
      transparent,
      transparent
    );
    animation: ${animateAfter} 15s infinite;
    z-index: -1;
  }
  & .card {
    backdrop-filter: blur(5rem) brightness(0.5);
    min-height: 20rem;
    display: grid;
    place-content: center;
    border-radius: 2rem;
    background-color: rgb(128, 128, 128, 0.075);
    padding: 4rem;
    gap: 1.5rem;
    @media screen and (max-width: 50rem) {
      padding: 1.5rem;
      border-radius: 1rem;
      gap: 1rem;
      & h1 {
        font-size: 1.5rem;
      }
    }
    & p {
      text-align: justify;
    }
  }
`;

const Index = () => {
  return (
    <About>
      <Head>
        <title>About | WebInRush 🚀</title>
      </Head>
      <div className="card container">
        <h1>WebInRush 🚀</h1>
        <p>
          WebInRush is a full-service web solutions provider that aims to help
          businesses of all sizes build a strong and effective online presence.
          💻🌐💪 We specialize in creating custom websites, e-commerce stores,
          mobile apps, and digital marketing campaigns that are tailored to the
          unique needs and goals of our clients. Our team of skilled
          professionals has years of experience in the industry and is dedicated
          to providing the highest level of customer satisfaction.
        </p>
        <p>
          At WebInRush, we believe that a strong online presence is essential
          for businesses to succeed in today&apos;s digital age. With more and
          more people turning to the internet to find products and services,
          having a well-designed and functional website is no longer just an
          option, it&apos;s a necessity. 🚀
        </p>
        <p>
          That&apos;s where we come in. We work closely with our clients to
          understand their needs and goals, and to create web solutions that are
          not only visually appealing but also highly functional and easy to
          use. We use the latest technologies and best practices to ensure that
          our websites are fast, responsive, and accessible across all devices.
        </p>
        <p>
          In addition to web design and development, we also offer a wide range
          of digital marketing services. We help our clients increase their
          online visibility, attract more visitors to their websites, and
          convert those visitors into customers. From search engine optimization
          (SEO) and social media marketing to email marketing and pay-per-click
          (PPC) advertising, we have the expertise and tools to help our clients
          achieve their digital marketing goals.
        </p>
        <p>
          At WebInRush, we pride ourselves on our commitment to customer
          satisfaction. We work closely with our clients throughout the entire
          web design and development process, and we provide ongoing support and
          maintenance to ensure that their websites are always up to date and
          performing at their best. We understand that each of our clients has
          unique needs and goals, and we strive to provide personalized
          solutions that meet those needs and exceed their expectations.
        </p>
        <p>
          In conclusion, WebInRush is your one-stop-shop for all your web
          solutions needs. Whether you need a custom website, an e-commerce
          store, a mobile app, or a digital marketing campaign, we have the
          skills and expertise to deliver high-quality solutions that will help
          your business thrive. So why wait? Contact us today and let us help
          you take your online presence to the next level! 🚀🌟
        </p>
        <p>
          Thank you for considering WebInRush for your web needs. We look
          forward to working with you! 🤝
        </p>
      </div>
    </About>
  );
};

export default Index;
