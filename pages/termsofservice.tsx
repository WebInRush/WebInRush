import Head from "next/head";
import Link from "next/link";
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

const Terms = styled.div`
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
    <Terms>
      <Head>
        <title>Terms of Service | WebInRush 🚀</title>
      </Head>
      <div className="card container">
        <h1>📝 Terms of Service</h1>
        <p>
          Welcome to WebInRush! These terms and conditions outline the rules and
          regulations for the use of our website and services. By accessing this
          website or using our services, you agree to be bound by these terms
          and conditions. If you do not agree to these terms and conditions, you
          may not use our website or services.
        </p>
        <div>
          <h2>👥 Accounts</h2>
          <p>
            To access certain features of our website or services, you may be
            required to create an account with us. You must provide accurate and
            complete information when creating your account, and you are solely
            responsible for maintaining the confidentiality of your account and
            password. You agree to accept responsibility for all activities that
            occur under your account or password.
          </p>
        </div>
        <div>
          <h2>🚫 Prohibited Activities</h2>
          <p>
            You agree not to engage in any activity that is unlawful, harmful,
            threatening, abusive, harassing, defamatory, or otherwise
            objectionable. This includes, but is not limited to, the following:
          </p>
          <ul>
            <li>Impersonating another person or entity</li>
            <li>Harassing or stalking another person</li>
            <li>
              Transmitting any content that is illegal, offensive, or harmful to
              minors
            </li>
            <li>
              Attempting to interfere with the proper functioning of our website
              or services
            </li>
            <li>
              Uploading or transmitting any viruses, worms, or other harmful
              software
            </li>
            <li>
              Collecting or storing any personally identifiable information of
              other users
            </li>
          </ul>
          <p>
            We reserve the right to investigate and take appropriate legal
            action against anyone who violates these provisions, including
            without limitation, removing the offending content or suspending or
            terminating the offending user&apos;s account.
          </p>
        </div>
        <div>
          <h2>💰 Payments and Refunds</h2>
          <p>
            Payment for our services is required in advance of service
            provision, and we accept various forms of payment. We also offer a
            refund policy that allows our customers to request a refund within a
            certain period of time after the purchase. Please see our website
            for more information about our{" "}
            <Link href="/refundpolicy">refund policy</Link>.
          </p>
        </div>
        <div>
          <h2>📄 Intellectual Property</h2>
          <p>
            All content and materials available on our website and services,
            including but not limited to text, graphics, logos, images, and
            software, are the property of WebInRush and are protected by
            applicable copyright and trademark law. You may not copy, reproduce,
            distribute, display, or otherwise use any of our content or
            materials without our express written consent.
          </p>
        </div>
        <div>
          <h2>🚫 Termination</h2>
          <p>
            We may terminate or suspend access to our website or services
            immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach these terms
            and conditions. Upon termination, your right to use our website and
            services will immediately cease.
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
          <h2>📝 Modifications</h2>
          <p>
            We reserve the right to modify these terms and conditions at any
            time, and your continued use of our website or services after any
            such modifications shall constitute your acceptance of the modified
            terms and conditions.
          </p>
          <p>
            If you have any questions or concerns about these terms and
            conditions, please contact us at itsmesubid@gmail.com. Thank you for
            choosing WebInRush! 🚀
          </p>
        </div>
      </div>
    </Terms>
  );
};

export default Index;
