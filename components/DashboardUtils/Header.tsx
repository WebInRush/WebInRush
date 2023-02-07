import Image from "next/image";
import styled from "styled-components";
import webinrush from "../../public/images/webinrush.webp";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  margin-inline: auto;
  width: min(100%, 70rem);
  background-color: rgb(var(--secondary-color), 0.25);
  color: rgb(var(--white-color));
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2px 5px rgb(var(--dark-color), 0.25);
  cursor: pointer;
  @media screen and (max-width: 70rem) {
    border-radius: 0;
  }
  & img {
    border-radius: 50%;
  }
  & .conversation-info-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    letter-spacing: 0.05rem;
    font-size: large;
    & .company-name {
      font-weight: 500;
    }
    & .subtitle {
      color: rgb(var(--white-color), 0.8);
      font-size: 0.9rem;
    }
  }
`;

const Header = () => {
  const developers = ["SUBID DAS"];
  return (
    <HeaderStyled>
      <Image src={webinrush.src} alt="" width={50} height={50} />
      <div className="conversation-info-header">
        <div className="company-name">WEBINRUSH</div>
        <div className="subtitle">
          {developers.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
