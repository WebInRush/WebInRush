import styled from "styled-components";
import { GoNote } from "react-icons/go";
import { HiOutlineCode } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";

const PlanStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  gap: 3rem;
  & h2 {
    color: rgb(var(--white-color));
    font-size: 3rem;
    letter-spacing: -0.1rem;
    text-align: center;
    font-weight: 700;
    & span {
      color: rgb(var(--secondary-color), 0.75);
    }
  }
  & .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
    & section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      padding: 2rem 0;
      & .image {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        padding: 2rem;
        border-radius: 50%;
        color: rgb(var(--primary-color));
        background: linear-gradient(
          45deg,
          rgba(var(--secondary-color), 0),
          rgba(var(--secondary-color), 0.05),
          rgba(var(--secondary-color), 0.1)
        );
      }
      & h3 {
        white-space: nowrap;
      }
      & p {
        text-align: center;
      }
    }
  }
`;

const Plan = () => {
  return (
    <PlanStyle className="container">
      <h2>
        What&apos;s your <span>Plan</span> ?
      </h2>
      <div className="wrapper">
        <section>
          <span className="image">
            <GoNote />
          </span>
          <h3>Order your plan</h3>
          <p>
            Upgrade your productivity with our premium plan! Unlock powerful
            features and tools that will take your workflow to the next level.
            Say goodbye to inefficiency and hello to seamless collaboration.
            Join now and experience the difference with our unbeatable pricing.
          </p>
        </section>
        <section>
          <span className="image">
            <HiOutlineCode />
          </span>
          <h3>Development</h3>
          <p>
            Our website development services prioritize both functionality and
            aesthetics to provide the best user experience. We have expertise in
            various technologies, including Next.js, to handle projects of any
            size and complexity.
          </p>
        </section>
        <section>
          <span className="image">
            <TbTruckDelivery />
          </span>
          <h3>Delivery</h3>
          <p>
            Our delivery process starts with a thorough analysis of your project
            requirements. We work with you to identify the goals of your
            project, the target audience, and the budget. Based on this
            analysis, we create a detailed project plan that outlines the scope
            of work, the timeline, and the budget.
          </p>
        </section>
      </div>
    </PlanStyle>
  );
};

export default Plan;
