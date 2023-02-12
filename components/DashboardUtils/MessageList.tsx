import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import Message from "./Message";

const ChatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  width: min(100%, 70rem);
  height: 80vh;
  overflow-y: auto;
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
  const chats = messages?.docs.map((doc) => doc.data().message!);
  // sort message by createdAt
  chats?.sort((a, b) => b.createdAt?.seconds! - a.createdAt?.seconds!);
  return (
    <ChatsStyle className="container">
      {chats?.map((chat, index) => (
        <Message key={index} chatMessage={chat} />
      ))}
    </ChatsStyle>
  );
};

export default MessageList;
