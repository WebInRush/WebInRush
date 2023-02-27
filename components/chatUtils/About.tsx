import styled from "styled-components";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
import webinrush from "../../public/images/webinrush.webp";
import { IoCloseOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { TiUserDeleteOutline } from "react-icons/ti";
import { Member } from "@/member";

type AboutProps = {
  isInfo: boolean;
  setInfo: Dispatch<SetStateAction<boolean>>;
};

const AboutStyle = styled.div<{ isInfo: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden auto;
  border-left: 1px solid rgb(var(--white-color), 0.1);
  translate: ${({ isInfo }) => (isInfo ? "0" : "100vw")};
  width: ${({ isInfo }) => (isInfo ? "min(20rem, 100vw)" : "0")};
  transition: 0.15s;
  @media screen and (max-width: 50rem) {
    width: ${({ isInfo }) => isInfo && "100vw"};
    border: none;
  }
  & header {
    position: sticky;
    top: 0;
    left: 0;
    backdrop-filter: blur(0.5rem);
    display: flex;
    align-items: center;
    padding: 1.525rem 1rem;
    width: 100%;
    background-color: rgb(var(--secondary-color), 0.25);
    gap: 1.5rem;
    & span {
      display: flex;
      align-content: center;
      &.close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.15s;
        &:hover {
          background-color: rgb(var(--white-color), 0.1);
          @media screen and (max-width: 50rem) {
            background-color: rgb(var(--white-color), 0);
          }
        }
        &:active {
          background-color: rgb(var(--white-color), 0.15);
          @media screen and (max-width: 50rem) {
            background-color: rgb(var(--white-color), 0);
          }
        }
        & svg {
          font-size: 1.25rem;
          @media screen and (max-width: 50rem) {
            font-size: 1.5rem;
          }
        }
      }
      &.name {
        padding-block: 0.25rem;
      }
    }
  }
  & .brand {
    margin: 2rem auto;
    width: 80%;
    & img {
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      border-radius: 50%;
    }
    & p {
      text-align: center;
      font-size: 1.5rem;
      color: rgb(var(--white-color), 0.75);
      &.title {
        font-weight: 600;
      }
      &.info {
        font-size: 0.75rem;
        color: rgb(var(--white-color), 0.5);
      }
    }
  }
  & .description {
    width: 80%;
    margin: 1rem auto;
    & p {
      color: rgb(var(--white-color), 0.75);
      text-align: justify;
      &.created {
        font-size: 0.8rem;
        color: rgb(var(--white-color), 0.5);
        margin-block: 0.5rem;
      }
    }
  }
  & .team {
    padding-block: 1rem;
    border-top: 1px solid rgb(var(--white-color), 0.1);
    & h2 {
      display: flex;
      width: 80%;
      margin-inline: auto;
      font-size: 0.8rem;
      color: rgb(var(--white-color), 0.75);
      font-weight: 500;
    }
    & .members {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-block: 0.5rem;
      & a {
        padding-block: 0.5rem;
        &:hover {
          background: rgb(var(--black-color), 0.15);
        }
        & .member {
          display: flex;
          width: 80%;
          margin-inline: auto;
          gap: 0.5rem;
          cursor: pointer;
          & img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
          }
          & p {
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-size: 1rem;
            color: rgb(var(--white-color), 0.75);
            & span {
              &.name {
                font-weight: 500;
              }
              &.about {
                font-size: 0.9rem;
                color: rgb(var(--white-color), 0.5);
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
  & .buttons {
    padding-block: 1rem;
    border-top: 1px solid rgb(var(--white-color), 0.1);
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    gap: 0.25rem;
    & .button {
      padding-block: 1rem;
      user-select: none;
      cursor: pointer;
      &:hover {
        background: rgb(var(--black-color), 0.15);
      }
      &:active {
        background: rgb(var(--black-color), 0.25);
      }
      & .wrapper {
        width: 80%;
        margin-inline: auto;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: rgb(var(--red-color));
        font-weight: 500;
        letter-spacing: 0.025rem;
        & svg {
          font-weight: 600;
          font-size: 1.25rem;
        }
      }
    }
  }
`;

const About = ({ isInfo, setInfo }: AboutProps) => {
  const { data: session } = useSession();
  const [team, loading, error] = useCollection(
    session && collection(db, "team")
  );
  const members = team?.docs?.map((doc) => doc.data().members!)[0];
  const isDeveloper = members?.find(
    (member: Member) => member.email === session?.user?.email
  );
  const router = useRouter();
  return (
    <AboutStyle isInfo={isInfo}>
      <header>
        <span className="close" onClick={() => setInfo(false)}>
          <IoCloseOutline />
        </span>
        <span className="name">WebInRush info</span>
      </header>
      <div className="brand">
        <Image
          src={webinrush.src}
          alt=""
          width={250}
          height={250}
          draggable={"false"}
        />
        <p className="title">WebInRush</p>
        <p className="info">
          Team · {members?.length!}{" "}
          {members?.length! > 1 ? "participants" : "participant"}
        </p>
      </div>
      <div className="description">
        <p className="about">
          WebInRush is an organization that makes websites for you. WebInRush is
          an organization that specializes in creating high-quality,
          user-friendly websites for its clients.
        </p>
        <p className="created">WebInRush created by SUBID, on Dec 2022</p>
      </div>
      <div className="team">
        <h2>
          {members?.length!}{" "}
          {members?.length! > 1 ? "participants" : "participant"}
        </h2>
        <div className="members">
          {members?.map((member: Member, index: number) => {
            const { profilePic, name, about, link } = member;
            return (
              <a href={link} key={index} target="_blank" rel="noreferrer">
                <div className="member">
                  {
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profilePic}
                      alt={name}
                      className="profilePic"
                      draggable={"false"}
                    />
                  }
                  <p>
                    <span className="name" title={name}>
                      {name}
                    </span>
                    <span className="about" title={about}>
                      {about}
                    </span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        {!!isDeveloper && (
          <div
            className="button"
            onClick={async () => {
              const messages = await getDocs(query(collection(db, "messages")));
              messages.forEach(async (message) => {
                await deleteDoc(doc(db, "messages", message.id));
              });
            }}
          >
            <div className="wrapper">
              <MdDeleteOutline />
              <span>Delete conversation</span>
            </div>
          </div>
        )}
        <div
          className="button"
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="wrapper">
            <RxExit />
            <span>Leave conversation</span>
          </div>
        </div>
        <div
          className="button"
          onClick={() => {
            signOut();
          }}
        >
          <div className="wrapper">
            <TiUserDeleteOutline />
            <span>Sign out</span>
          </div>
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
