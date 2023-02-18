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

const Privacy = styled.div`
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
    & div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: disc;
        padding-inline-start: 2rem;
      }
    }
    & p {
      text-align: justify;
    }
  }
`;

const Index = () => {
  return (
    <Privacy>
      <Head>
        <title>Privacy Policy | WebInRush 🚀</title>
      </Head>
      <div className="card container">
        <h1>🔒 WebInRush Privacy Policy</h1>
        <p>
          At WebInRush, we are committed to protecting the privacy and security
          of our users. This privacy policy explains how we collect and use your
          personal information when you use our website, products, and services.
        </p>
        <div>
          <h2>📝 Collection of Personal Information</h2>
          <p>
            We may collect personal information from you when you register for
            an account, make a purchase, or otherwise use our services. The
            information we collect may include your name, email address, phone
            number, billing information, and other information you provide to
            us.
          </p>
          <p>
            We also collect information automatically when you use our website
            or services, such as your IP address, browser type, operating
            system, and other technical information.
          </p>
        </div>
        <div>
          <h2>👥 Use of Personal Information</h2>
          <p>
            We use your personal information to provide and improve our
            services, to communicate with you, and to personalize your
            experience. We may also use your information for research and
            analytics purposes, to prevent fraud, and to comply with legal
            obligations.
          </p>
          <p>
            We may share your personal information with third-party service
            providers who help us deliver our services, such as hosting
            providers, payment processors, and marketing partners. We will not
            sell or rent your personal information to third parties.
          </p>
        </div>
        <div>
          <h2>🔒 Security of Personal Information</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. We use
            industry-standard security technologies and procedures to protect
            your personal information, such as encryption, firewalls, and secure
            servers.
          </p>
          <p>
            However, no method of transmission over the internet or electronic
            storage is 100% secure, so we cannot guarantee the absolute security
            of your personal information.
          </p>
        </div>
        <div>
          <h2>📜 Your Rights</h2>
          <p>
            You have the right to access, correct, and delete your personal
            information. You may also object to or restrict the processing of
            your personal information, or request a copy of your personal
            information in a structured, machine-readable format.
          </p>
          <p>
            If you have any questions or concerns about our privacy policy, or
            if you would like to exercise your rights, please contact us at
            itsmesubid@gmail.com.
          </p>
        </div>
        <div>
          <h2>📝 Changes to the Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect
            changes in our practices or to comply with legal requirements. We
            will notify you of any material changes by posting the updated
            policy on our website or by sending you an email.
          </p>
        </div>
        <div>
          <h2>🔐 Privacy</h2>
          <p>
            We take your privacy seriously and are committed to protecting your
            personal information. Please see our privacy policy for more
            information about how we collect, use, and protect your personal
            information.
          </p>
        </div>
        <div>
          <h2>👥 Contact Us</h2>
          <p>
            If you have any questions or concerns about our privacy policy,
            please contact us at itsmesubid@gmail.com. We will respond to your
            inquiry as soon as possible.
          </p>
          <p>
            🔒 Thank you for trusting WebInRush with your personal information.
            We are committed to protecting your privacy and providing you with a
            great user experience.
          </p>
        </div>
      </div>
    </Privacy>
  );
};

export default Index;
