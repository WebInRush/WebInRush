import styled from "styled-components";

const FooterElement = styled.footer`
  color: currentColor;
  padding-block: 1rem;
  text-align: center;
  transition: 0.15s;
  & .row {
    margin-bottom: 2rem;
    display: flex;
    gap: 5rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
      gap: 2rem;
    }
    & .col {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      text-align: left;
      @media screen and (max-width: 50rem) {
        text-align: center;
      }
      & .col-header {
        & h2 {
          font-size: 1.5rem;
          color: rgb(var(--primary-color));
          text-transform: uppercase;
        }
        & span {
          font-size: 1rem;
          color: rgb(var(--light-color), 0.5);
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      & .col-body {
        & ul {
          list-style: none;
          & li {
            font-size: 0.9rem;
            color: rgb(var(--light-color), 0.5);
            font-weight: 300;
          }
        }
      }
    }
  }
  & .credits {
    font-size: 1rem;
    color: rgb(var(--light-color), 0.5);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }
`;

const Footer = () => {
  return (
    <FooterElement className="container">
      <div>
        <div className="row">
          <div className="col">
            <div className="col-header">
              <h2>SUBID DAS</h2>
              <span>Full-Stack Web Developer</span>
            </div>
            <div className="col-body">
              <ul>
                <li>
                  Designed and built with all the love in the world by the SUBID
                  DAS using MERN Stack.
                </li>
                <li>Code licensed GNU General Public License v3.0.</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="col-header">
              <h2>Social</h2>
            </div>
            <div className="col-body">
              <ul>
                <li>
                  <a
                    href="http://github.com/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/ItsmeSubid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="col-header">
              <h2>Projects</h2>
            </div>
            <div className="col-body">
              <ul>
                <li>
                  <a
                    href="https://news365-itsme-subid.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    News365
                  </a>
                </li>
                <li>
                  <a
                    href="https://resume-builder-itsme-subid.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a
                    href="https://itsme-subid.github.io/MyNotebook/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MyNotebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://itsme-subid.github.io/Password-Generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Password Generator
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="credits">?? 2022 itsme-Subid, Inc.</div>
      </div>
    </FooterElement>
  );
};

export default Footer;
