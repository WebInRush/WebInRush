import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import styled from "styled-components";
import webinrush from "../../public/images/webinrush.webp";
import { FiMoreVertical } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { Member } from "@/member";

type StyleProps = {
  isMore: boolean;
};

type HeaderProps = {
  isInfo: boolean;
  setInfo: Dispatch<SetStateAction<boolean>>;
};

const HeaderStyled = styled.header<StyleProps>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  margin-inline: auto;
  width: 100%;
  background-color: rgb(var(--secondary-color), 0.25);
  color: rgb(var(--white-color));
  box-shadow: 0 2px 5px rgb(var(--dark-color), 0.25);
  z-index: 2;
  transition: 0.15s;
  @media screen and (max-width: 70rem) {
    border-radius: 0;
  }
  & .left {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
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
  }
  & .right {
    display: flex;
    align-items: center;
    gap: 1rem;
    & span {
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
      &.more {
        ${({ isMore }) =>
          isMore && "background-color: rgb(var(--white-color), 0.1);"}
      }
      & svg {
        font-size: 1.25rem;
        @media screen and (max-width: 50rem) {
          font-size: 1.5rem;
        }
      }
    }
  }
  & .more-menu {
    position: absolute;
    top: 75%;
    right: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: rgb(var(--dark-color));
    border: 1px solid rgb(var(--white-color), 0.1);
    border-radius: 0.75rem;
    box-shadow: 0 2px 5px rgb(var(--dark-color), 0.25);
    opacity: 0;
    scale: 0;
    scale: 0;
    visibility: hidden;
    transition: 0.15s;
    transform: translateY(-0.5rem);
    pointer-events: none;
    cursor: pointer;
    transform-origin: top right;
    &.active {
      opacity: 1;
      scale: 1;
      visibility: visible;
      transform: translateY(0);
      pointer-events: all;
    }
    & .menu-item {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: 0.15s;
      user-select: none;
      &:hover {
        background-color: rgb(var(--white-color), 0.1);
      }
      &:active {
        background-color: rgb(var(--white-color), 0.15);
      }
    }
  }
`;

const Header = ({ isInfo, setInfo }: HeaderProps) => {
  const { data: session } = useSession();
  const [team, loading, error] = useCollection(
    session && collection(db, "team")
  );
  const members = team?.docs
    ?.map((doc) => doc.data().members!)[0]
    ?.map(({ name, email }: Member) => ({ name, email }));
  const isDeveloper = members?.find(
    (member: Member) => member.email === session?.user?.email
  );
  const [more, setMore] = useState(false);
  const router = useRouter();
  return (
    <HeaderStyled isMore={more}>
      <div className="left" onClick={() => setInfo(true)}>
        <Image src={webinrush.src} alt="" width={50} height={50} />
        <div className="conversation-info-header">
          <div className="company-name">WEBINRUSH</div>
          <div className="subtitle">
            {members?.map(({ name }: Member, index: number) => name).join(", ")}
          </div>
        </div>
      </div>
      <div className="right">
        <span className="info" onClick={() => setInfo(!isInfo)}>
          <BiInfoCircle title="info" />
        </span>
        <span className="more" onClick={() => setMore(!more)}>
          <FiMoreVertical title="more" />
        </span>
      </div>
      <div className={`more-menu ${more && "active"}`}>
        {!!isDeveloper && (
          <div
            className="menu-item"
            onClick={async () => {
              setMore(!more);
              const messages = await getDocs(query(collection(db, "messages")));
              messages.forEach(async (message) => {
                await deleteDoc(doc(db, "messages", message.id));
              });
            }}
          >
            Delete conversation
          </div>
        )}
        <div
          className="menu-item"
          onClick={() => {
            setMore(!more);
            router.push("/");
          }}
        >
          Leave conversation
        </div>
        <div
          className="menu-item"
          onClick={() => {
            setMore(!more);
            signOut();
          }}
        >
          Sign out
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
