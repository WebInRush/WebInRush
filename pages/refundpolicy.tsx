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

const Refund = styled.div`
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
    <Refund>
      <Head>
        <title>Refund Policy | WebInRush 🚀</title>
      </Head>
      <div className="card container">
        <h1>Refund Policy</h1>
        <p>
          At Webinrush, we take great pride in our products and services, and we
          are committed to providing our customers with the highest level of
          quality and satisfaction. However, we understand that in certain
          circumstances, a refund may be necessary.
        </p>
        <div>
          <p>Refunds may be granted in the following situations:</p>
          <ul>
            <li>
              <strong>Service not rendered</strong>: If we are unable to deliver
              the service you have paid for, we will issue a full refund.
            </li>
            <li>
              <strong>Dissatisfaction with service</strong>: If you are not
              satisfied with the service you have received, we will work with
              you to resolve any issues. If we are unable to do so to your
              satisfaction, we will issue a refund.
            </li>
            <li>
              <strong>Billing error</strong>: If you have been charged for a
              service that you did not receive or for an amount that is
              incorrect, we will issue a refund.
            </li>
          </ul>
          <p>
            To request a refund, please contact our customer service team at
            itsmesubid@gmail.com. Please provide your name, order number, and a
            brief explanation of why you are requesting a refund.
          </p>
          <p>
            Once your refund has been approved, it may take up to seven days to
            process. Refunds will be issued via the same payment method used for
            the original transaction.
          </p>
          <p>
            Please note that certain services may be non-refundable. This will
            be clearly stated in the product description or service agreement.
          </p>
          <p>
            Please note that certain services may be non-refundable. This will
            be clearly stated in the product description or service agreement.
          </p>
          <p>
            If you have any questions or concerns about our refund policy,
            please contact our customer service team at itsmesubid@gmail.com.
          </p>
          <p>
            👉🏼 <strong>Important Note</strong>: Our refund policy is subject to
            change at any time. Please review this page regularly to ensure that
            you are familiar with the latest version of our policy.
          </p>
          <p>Thank you for choosing WebInRush! 🚀</p>
        </div>
      </div>
    </Refund>
  );
};

export default Index;
