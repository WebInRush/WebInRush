import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import Message from "./Message";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addLocale(en);

const ChatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1rem 0 2rem 0;
  margin: auto;
  width: min(100%, 70rem);
  height: 80vh;
  overflow-y: auto;
  @media screen and (max-width: 50rem) {
    height: 82vh;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: rgb(var(--dark-color), 0.25);
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(var(--dark-color), 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(var(--dark-color), 0.75);
  }
`;

const MessageList = () => {
  const { data: session } = useSession();
  const [messages, loading, error] = useCollection(
    session && collection(db, "messages")
  );
  const chats = messages?.docs?.map((doc) => doc.data().message!);
  // sort message by createdAt
  chats?.sort((a, b) => b.createdAt?.seconds! - a.createdAt?.seconds!);
  return (
    <ChatsStyle>
      {chats?.map((chat, index) => (
        <Message key={index} chatMessage={chat} />
      ))}
    </ChatsStyle>
  );
};

export default MessageList;
