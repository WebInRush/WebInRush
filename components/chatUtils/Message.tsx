import { db } from "@/firebase";
import { Message } from "@/message";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ReactTimeAgo from "react-time-ago";
import styled from "styled-components";

const ChatStyle = styled.div<{ isUser?: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  margin-inline: ${({ isUser }) => (isUser ? "0 1rem" : "1rem 0")};
  user-select: none;
  & img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: cover;
    order: ${({ isUser }) => (isUser ? 1 : 0)};
  }
  & .message {
    position: relative;
    margin-inline: ${({ isUser }) => (isUser ? "0 1rem" : "1rem 0")};
    padding: 0.5rem 1rem 1rem 1rem;
    min-width: 10rem;
    max-width: 50vw;
    border-radius: ${({ isUser }) =>
      isUser ? "0.75rem 0 0.75rem 0.75rem" : "0 0.75rem 0.75rem 0.75rem"};
    font-size: 1.25rem;
    color: rgb(var(--dark-color), 0.75);
    background: ${({ isUser }) =>
      isUser ? "rgb(var(--primary-color))" : "rgb(var(--white-color))"};
    user-select: text;
    &::before {
      content: "";
      position: absolute;
      top: ${({ isUser }) => (isUser ? "-0.5rem" : "-0.35rem")};
      left: ${({ isUser }) => (isUser ? "auto" : "-0.25rem")};
      right: ${({ isUser }) => (isUser ? "-0.5rem" : "auto")};
      width: 0;
      height: 0;
      border-top: 0.75rem solid transparent;
      border-bottom: 0.75rem solid transparent;
      border-left: ${({ isUser }) =>
        isUser ? "0.75rem solid rgb(var(--primary-color))" : "none"};
      border-right: ${({ isUser }) =>
        isUser ? "none" : "0.75rem solid rgb(var(--white-color))"};
      transform: ${({ isUser }) =>
        isUser ? "rotate(-135deg)" : "rotate(-90deg)"};
    }
    @media screen and (max-width: 50rem) {
      max-width: 80%;
    }
    & .title {
      display: flex;
      justify-content: space-between;
    }
    & span {
      font-size: 0.75rem;
      display: flex;
      &.time {
        position: absolute;
        right: 0.5rem;
        bottom: 0.25rem;
        justify-content: flex-end;
        gap: 0.25rem;
      }
    }
  }
  & .timeago {
    position: absolute;
    bottom: -1.25rem;
    ${({ isUser }) => (isUser ? "right: 0" : "left: 0")};
    font-size: 0.75rem;
    color: rgb(var(--white-color), 0.5);
  }
`;

const Message = ({ chatMessage }: { chatMessage: Message }) => {
  const date = chatMessage?.createdAt?.toDate();
  const { data: session } = useSession();
  // check if the message is sent by the user
  const isUser = chatMessage?.email === session?.user?.email!;
  const [team, loading, error] = useCollection(
    session && collection(db, "team")
  );
  const members = team?.docs
    ?.map((doc) => doc.data().members!)
    .map((member) => {
      const { name, email } = member[0];
      return { name, email };
    });
  const isDeveloper = members?.find(
    (member) => member.email === chatMessage?.email
  );
  return (
    <ChatStyle isUser={isUser}>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src={chatMessage.profilePic} alt={chatMessage?.username} />
      }
      <div className="message">
        <div className="title">
          {!isUser && <span>{chatMessage?.username}</span>}
          {!!isDeveloper && !isUser && <span>Developer</span>}
        </div>
        <p>{chatMessage?.message}</p>
        <span className="time">
          <span>
            {date?.getHours() < 10
              ? "0" + date?.getHours().toString()
              : date?.getHours().toString()}
            :
            {date?.getMinutes() < 10
              ? "0" + date?.getMinutes().toString()
              : date?.getMinutes().toString()}
          </span>
        </span>
        {date && (
          <ReactTimeAgo date={date} locale="en-US" className="timeago" />
        )}
      </div>
    </ChatStyle>
  );
};

export default Message;
