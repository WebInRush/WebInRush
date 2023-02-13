import { Message } from "@/message";
import { useSession } from "next-auth/react";
import ReactTimeAgo from "react-time-ago";
import styled from "styled-components";

const ChatStyle = styled.div<{ isUser?: boolean }>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
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
    padding: 0.5rem 1rem;
    min-width: 10rem;
    border-radius: 0.75rem;
    font-size: 1.25rem;
    color: rgb(var(--dark-color), 0.75);
    background: ${({ isUser }) =>
      isUser ? "rgb(var(--primary-color))" : "rgb(var(--white-color), 0.75)"};
    & .title {
      display: flex;
      justify-content: space-between;
    }
    & span {
      font-size: 0.75rem;
      display: flex;
      &.timeago {
        justify-content: flex-end;
      }
    }
  }
`;

const Message = ({ chatMessage }: { chatMessage: Message }) => {
  const date = new Date(chatMessage?.createdAt?.seconds! * 1000);
  // check if the message is sent by the user
  const { data: session } = useSession();
  const isUser = chatMessage?.email === session?.user?.email!;
  return (
    <ChatStyle isUser={isUser}>
      <img src={chatMessage.profilePic} alt={chatMessage?.username} />
      <div className="message">
        <div className="title">
          <span>
            {chatMessage?.email === session?.user?.email
              ? "You"
              : chatMessage?.username}
          </span>
          {chatMessage?.email === "itsmesubid@gmail.com" &&
            chatMessage?.username === "SUBID DAS" && <span>Developer</span>}
        </div>
        <p>{chatMessage?.message}</p>
        <span className="timeago">
          {/* <ReactTimeAgo date={date} locale="en-US" /> */}
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </span>
      </div>
    </ChatStyle>
  );
};

export default Message;
